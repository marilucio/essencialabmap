import { useEffect, useMemo, useRef, useState, type Dispatch, type FormEvent } from "react";
import { createPortal } from "react-dom";
import Footer from "@/components/Footer";
import { enviarCadastro, novoEventId, sincronizar } from "./api";
import { Ampliar } from "./components/Ampliar";
import { Botao, Escala, Frase, Opcoes, SeletorFaixa } from "./components/Controles";
import { IconeArea, IconeSeta } from "./components/Icones";
import { Autor, Nota, Rotulo } from "./components/Partes";
import { DUR, INDICACAO_ATIVA } from "./constants";
import type { Area, FunilContent } from "./content/types";
import {
  AREAS,
  depoisQuaseNada,
  eixoVencedor,
  etapasPlano,
  examesRaramente,
  EIXOS,
  PONTOS_MAXIMOS,
  pontuarEixos,
  trabalhoMes,
  type Respostas,
} from "./logic";
import { prefereMenosMovimento, useContagem, useDepois } from "./motion";
import type { Slug } from "./screens";
import type { Acao, CadastroPendente, Card, Estado } from "./state";
import { fill, type TextoCtx } from "./text";
import { linkTeste, trackInicioTeste, trackLead, trackPlano, trackViewContent } from "./tracking";
import { Delta } from "./viz/Delta";
import { Extracao } from "./viz/Extracao";
import { ResumoRetorno } from "./viz/ResumoRetorno";
import { Teia } from "./viz/Teia";
import { MiniTimeline, Timeline } from "./viz/Timeline";

export type TelaProps = {
  c: FunilContent;
  ctx: TextoCtx;
  estado: Estado;
  dispatch: Dispatch<Acao>;
  /** Estado mais recente, para o reenvio em segundo plano. */
  obterEstado: () => Estado;
  avancar: () => void;
};

const f = fill;

/** Grava a resposta e avança depois de `atraso` ms (tempo do check e da vibração). */
function useResponder({ dispatch, avancar }: TelaProps) {
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  return <K extends keyof Respostas>(chave: K, valor: Respostas[K], atraso: number = DUR.avanco) => {
    dispatch({ tipo: "responder", chave, valor });
    timer.current = window.setTimeout(avancar, atraso);
  };
}

const Titulo = ({ children, id }: { children: string; id?: string }) => (
  <h1 className="mapf-h1" tabIndex={-1} id={id}>
    {children}
  </h1>
);

/* 1 · abertura (escura, avança sozinha em ~4 s) */
function Abertura({ c, avancar }: TelaProps) {
  const [p, setP] = useState(0);
  useEffect(() => {
    trackViewContent();
    const t0 = performance.now();
    let raf = 0;
    const passo = (agora: number) => {
      const fr = Math.min(1, (agora - t0) / (DUR.abertura - 400));
      setP(fr);
      if (fr < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    const fim = window.setTimeout(avancar, DUR.abertura);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fim);
    };
  }, [avancar]);
  return (
    <>
      <Rotulo>{c.abertura.rotulo}</Rotulo>
      <Titulo>{c.abertura.titulo}</Titulo>
      <div className="mapf-loadbar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p * 100)}>
        <i style={{ width: `${p * 100}%` }} />
      </div>
      <p className="mapf-sub is-small">{c.abertura.barra}</p>
      <div className="mapf-badges">
        {c.abertura.selos.map((s) => (
          <span key={s} className="mapf-badge">
            {s}
          </span>
        ))}
      </div>
    </>
  );
}

/* 2 · área */
function AreaTela(props: TelaProps) {
  const { c, ctx, estado } = props;
  const responder = useResponder(props);
  return (
    <>
      <Titulo>{c.area.titulo}</Titulo>
      <p className="mapf-sub">{f(c.area.sub, ctx)}</p>
      <Opcoes
        grade
        selecionada={estado.respostas.area ? AREAS.indexOf(estado.respostas.area) : undefined}
        opcoes={AREAS.map((a: Area, i) => ({ rotulo: c.area.opcoes[a], icone: <IconeArea area={a} />, larga: i === 4 }))}
        onEscolha={(i) => responder("area", AREAS[i])}
      />
    </>
  );
}

/* 3 · pacientes por mês */
function Pacientes(props: TelaProps) {
  const { c, ctx, estado, dispatch, avancar } = props;
  const [v, setV] = useState(estado.respostas.pacientes ?? 2);
  return (
    <>
      <Titulo>{f(c.pacientes.titulo, ctx)}</Titulo>
      <p className="mapf-sub">{c.pacientes.sub}</p>
      <SeletorFaixa faixas={c.pacientes.faixas} valor={v} rotulo={f(c.pacientes.titulo, ctx)} onMuda={setV} />
      <Botao
        onClick={() => {
          dispatch({ tipo: "responder", chave: "pacientes", valor: v });
          avancar();
        }}
      >
        {c.ui.continuar}
      </Botao>
    </>
  );
}

/** Pergunta de opções simples (telas 6, 8, 11, 17, 18). */
function Pergunta(props: TelaProps & { chave: keyof Respostas; titulo: string; sub?: string; opcoes: readonly string[] }) {
  const { ctx, estado, chave, titulo, sub, opcoes } = props;
  const responder = useResponder(props);
  return (
    <>
      <Titulo>{f(titulo, ctx)}</Titulo>
      {sub && <p className="mapf-sub">{f(sub, ctx)}</p>}
      <Opcoes
        selecionada={estado.respostas[chave] as number | undefined}
        opcoes={opcoes.map((o) => ({ rotulo: f(o, ctx) }))}
        onEscolha={(i) => responder(chave, i as never)}
      />
    </>
  );
}

/** Pergunta com frase depois da resposta (telas 4 e 13). */
function PerguntaComFrase(
  props: TelaProps & { chave: "primeira" | "sumiu"; titulo: string; opcoes: readonly string[]; frase: string; mostra: (i: number) => boolean },
) {
  const { ctx, estado, chave, titulo, opcoes, frase, mostra } = props;
  const responder = useResponder(props);
  const [frasePara, setFrasePara] = useState<number | null>(null);
  return (
    <>
      <Titulo>{f(titulo, ctx)}</Titulo>
      <Opcoes
        selecionada={estado.respostas[chave]}
        opcoes={opcoes.map((o) => ({ rotulo: f(o, ctx) }))}
        onEscolha={(i) => {
          const comFrase = mostra(i);
          if (comFrase) setFrasePara(i);
          responder(chave, i, comFrase ? DUR.frase : DUR.avanco);
        }}
      />
      {frasePara !== null && <Frase>{frase}</Frase>}
    </>
  );
}

/* 5 · antes da consulta: teia e pontos de atenção */
function Antes({ c, ctx, avancar }: TelaProps) {
  const pontos = useDepois(1700);
  return (
    <>
      <Rotulo>{c.antes.rotulo}</Rotulo>
      <Titulo>{f(c.antes.titulo, ctx)}</Titulo>
      <div className="mapf-viz mapf-viz-teia">
        <Teia sistemas={c.antes.sistemas} rotulo={c.antes.rotulo} />
        <ul className="mapf-pts">
          {c.antes.pontos.map((pt, i) => (
            <li key={pt} className={pontos ? "is-on" : undefined} style={{ transitionDelay: `${i * 300}ms` }}>
              <b aria-hidden="true" />
              {pt}
            </li>
          ))}
        </ul>
        <Nota>{c.antes.nota}</Nota>
      </div>
      <p className="mapf-sub">{f(c.antes.texto, ctx)}</p>
      <Botao onClick={avancar}>{c.ui.continuar}</Botao>
    </>
  );
}

/* 7 · o trabalho invisível (número que conta) */
function Invisivel({ c, ctx, estado, avancar }: TelaProps) {
  const r = estado.respostas;
  const t = trabalhoMes(r.pacientes ?? 2, r.depois ?? 2);
  const quaseNada = depoisQuaseNada(r);
  const valor = useContagem(t.emMinutos ? t.minutosMes : t.horas, { atraso: 200 });
  return (
    <>
      <Titulo>{f(quaseNada ? c.invisivel.tituloQuaseNada : c.invisivel.titulo, ctx)}</Titulo>
      <p className="mapf-big mapf-num">
        <span>{valor}</span>
        <small>{t.emMinutos ? c.invisivel.unidadeMinutos : c.invisivel.unidadeHoras}</small>
      </p>
      <p className="mapf-calc mapf-num">{f(c.invisivel.conta, ctx)}</p>
      <p className="mapf-sub">{f(quaseNada ? c.invisivel.textoQuaseNada : c.invisivel.texto, ctx)}</p>
      <Botao onClick={avancar}>{c.ui.continuar}</Botao>
    </>
  );
}

/* 9 · extração de exames */
function ExtracaoTela({ c, ctx, estado, avancar }: TelaProps) {
  return (
    <>
      <Rotulo>{c.extracao.rotulo}</Rotulo>
      <Titulo>{c.extracao.titulo}</Titulo>
      <Extracao arquivo={c.extracao.arquivo} colunas={c.extracao.colunas} linhas={c.extracao.linhas} />
      <Nota>{c.extracao.nota}</Nota>
      <p className="mapf-sub">{c.extracao.texto}</p>
      {examesRaramente(estado.respostas) && <p className="mapf-sub">{f(c.extracao.textoRaramente, ctx)}</p>}
      <Botao onClick={avancar}>{c.ui.continuar}</Botao>
    </>
  );
}

/* 10 e 15 · escalas */
function EscalaTela(props: TelaProps & { chave: "escala1" | "escala2"; e: FunilContent["escala1"] }) {
  const { ctx, estado, chave, e } = props;
  const responder = useResponder(props);
  return (
    <>
      <blockquote className="mapf-quote">{f(e.citacao, ctx)}</blockquote>
      <p className="mapf-sub">{e.pergunta}</p>
      <Escala selecionada={estado.respostas[chave]} extremos={e.extremos} rotulo={e.pergunta} onEscolha={(n) => responder(chave, n)} />
    </>
  );
}

/* 12 · Resumo do retorno (o pico, escura, rola) */
function Resumo({ c, ctx, avancar }: TelaProps) {
  return (
    <>
      <Rotulo>{c.resumo.rotulo}</Rotulo>
      <Titulo>{f(c.resumo.titulo, ctx)}</Titulo>
      <ResumoRetorno c={c.resumo} />
      <p className="mapf-sub">{f(c.resumo.texto, ctx)}</p>
      <Ampliar
        miniatura="/images/map/funil/resumo-retorno-real-600.webp"
        imagem="/images/map/funil/resumo-retorno-real.webp"
        alt={c.resumo.printAlt}
        legenda={c.resumo.legendaPrint}
        fechar={c.ui.fechar}
        largura={1731}
        altura={2573}
      />
      <Botao onClick={avancar}>{c.ui.continuar}</Botao>
    </>
  );
}

/* 14 · Delta MAP */
function DeltaTela({ c, ctx, avancar }: TelaProps) {
  return (
    <>
      <Rotulo>{c.delta.rotulo}</Rotulo>
      <Titulo>{f(c.delta.titulo, ctx)}</Titulo>
      <Delta casos={c.delta.casos} pdf={f(c.delta.pdf, ctx)} />
      <p className="mapf-sub">{f(c.delta.texto, ctx)}</p>
      <Nota>{c.delta.nota}</Nota>
      <Botao onClick={avancar}>{c.ui.continuar}</Botao>
    </>
  );
}

/* 16 · quem decide */
function Decisao({ c, ctx, avancar }: TelaProps) {
  const [acesas, setAcesas] = useState(0);
  useEffect(() => {
    if (prefereMenosMovimento()) {
      setAcesas(3);
      return;
    }
    const ts = [0, 1, 2].map((i) => window.setTimeout(() => setAcesas(i + 1), 300 + i * 600));
    return () => ts.forEach(window.clearTimeout);
  }, []);
  return (
    <>
      <Titulo>{c.decisao.titulo}</Titulo>
      <ul className="mapf-dec">
        {c.decisao.linhas.map((l, i) => (
          <li key={l} className={i < acesas ? "is-on" : undefined}>
            <i aria-hidden="true" />
            <span>{f(l, ctx)}</span>
          </li>
        ))}
      </ul>
      <Autor {...c.decisao.autor} />
      <Botao onClick={avancar}>{c.ui.continuar}</Botao>
    </>
  );
}

/* 19 · perfil */
function Perfil({ c, ctx, estado, avancar }: TelaProps) {
  const r = estado.respostas;
  const eixo = eixoVencedor(r);
  const pontos = pontuarEixos(r);
  const t = trabalhoMes(r.pacientes ?? 2, r.depois ?? 2);
  const linhas = [c.perfil.linhas.area, c.perfil.linhas.pacientes, t.emMinutos ? c.perfil.linhas.trabalhoMinutos : c.perfil.linhas.trabalho, c.perfil.linhas.prioridade];
  return (
    <>
      <Titulo>{c.perfil.titulo}</Titulo>
      <p className="mapf-sub">{c.perfil.medidor}</p>
      <div className="mapf-meter">
        {EIXOS.map((e) => (
          <div key={e} className={e === eixo ? "is-on" : undefined}>
            <span>{c.perfil.eixos[e]}</span>
            <span
              className="mapf-meter-track"
              role="meter"
              aria-label={c.perfil.eixos[e]}
              aria-valuemin={0}
              aria-valuemax={PONTOS_MAXIMOS}
              aria-valuenow={pontos[e]}
            >
              <i style={{ width: `${(pontos[e] / PONTOS_MAXIMOS) * 100}%` }} />
            </span>
          </div>
        ))}
      </div>
      <dl className="mapf-profile">
        {linhas.map((l) => {
          const [rotulo, valor] = f(l, ctx).split(" · ");
          return (
            <div key={l}>
              <dt>{rotulo}</dt>
              <dd className="mapf-num">{valor}</dd>
            </div>
          );
        })}
      </dl>
      <p className="mapf-greenbox">{c.perfil.caixa}</p>
      <p className="mapf-assinatura">{c.perfil.assinatura}</p>
      <Botao onClick={avancar}>{c.ui.continuar}</Botao>
    </>
  );
}

/* 20 · montando (escura, ~8 s) */
function Montando({ c, ctx, avancar }: TelaProps) {
  const [etapa, setEtapa] = useState(0);
  useEffect(() => {
    const ts = c.montando.etapas.map((_, i) => window.setTimeout(() => setEtapa(i + 1), (i + 1) * DUR.montagemEtapa - 300));
    const fim = window.setTimeout(avancar, c.montando.etapas.length * DUR.montagemEtapa + 200);
    return () => {
      ts.forEach(window.clearTimeout);
      window.clearTimeout(fim);
    };
  }, [avancar, c.montando.etapas]);
  return (
    <>
      <Titulo>{f(c.montando.titulo, ctx)}</Titulo>
      <ol className="mapf-steps">
        {c.montando.etapas.map((s, i) => (
          <li key={s} className={i < etapa ? "is-done" : i === etapa ? "is-run" : undefined}>
            <i aria-hidden="true" />
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <div className="mapf-loadbar" aria-hidden="true">
        <i style={{ width: `${(etapa / c.montando.etapas.length) * 100}%` }} />
      </div>
    </>
  );
}

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Reenvia em segundo plano o que ainda não chegou ao servidor (telas 22 e 23). */
function useSincronizar({ obterEstado, dispatch }: TelaProps) {
  useEffect(() => {
    void sincronizar(obterEstado, dispatch);
  }, [obterEstado, dispatch]);
}

/* 21 · e-mail */
function Email({ c, ctx, estado, dispatch, avancar }: TelaProps) {
  const [email, setEmail] = useState("");
  const [aceite, setAceite] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const isca = useRef<HTMLInputElement>(null);

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    const limpo = email.trim().toLowerCase();
    if (!EMAIL_OK.test(limpo)) {
      setErro(c.email.erroEmail);
      return;
    }
    setErro(null);
    setEnviando(true);
    // O mesmo eventID em todas as tentativas desta sessão (upsert no servidor, Lead único).
    const pendente: CadastroPendente = {
      email: limpo,
      consentimentoTexto: c.email.consentimento,
      idioma: c.lang,
      respostas: estado.respostas,
      eventId: estado.eventId ?? novoEventId(),
      isca: isca.current?.value ?? "",
    };
    dispatch({ tipo: "cadastro", pendente });
    if (!estado.leadDisparado) {
      trackLead(pendente.eventId);
      dispatch({ tipo: "leadDisparado" });
    }
    try {
      const { id } = await enviarCadastro(pendente);
      dispatch({ tipo: "lead", leadId: id });
    } catch {
      /* não bloqueia: o cadastro fica na sessão e é reenviado nas telas 22 a 24 */
    }
    avancar();
  };

  return (
    <form onSubmit={enviar} noValidate>
      <Titulo>{f(c.email.titulo, ctx)}</Titulo>
      <input
        className="mapf-field"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder={c.email.placeholder}
        aria-label={c.email.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-clarity-mask="true"
        required
      />
      <input ref={isca} type="text" name="empresa" tabIndex={-1} autoComplete="off" className="mapf-isca" aria-hidden="true" />
      <label className="mapf-consent">
        <input type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)} required />
        <span>{c.email.consentimento}</span>
      </label>
      {erro && (
        <p className="mapf-erro" role="alert">
          {erro}
        </p>
      )}
      <Botao type="submit" disabled={!aceite || !email.trim() || enviando}>
        {c.email.botao}
      </Botao>
    </form>
  );
}

/* 22 · nome (o nome e o e-mail do plano saem na tela 23, pelo reenvio) */
function Nome(props: TelaProps) {
  const { c, estado, dispatch, avancar } = props;
  const [nome, setNome] = useState(estado.nome ?? "");
  useSincronizar(props);
  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const primeiro = nome.trim().split(/\s+/)[0]?.slice(0, 40);
    if (!primeiro) return;
    dispatch({ tipo: "nome", nome: primeiro });
    avancar();
  };
  return (
    <form onSubmit={enviar}>
      <Titulo>{c.nome.titulo}</Titulo>
      {c.nome.sub && <p className="mapf-sub">{c.nome.sub}</p>}
      <input
        className="mapf-field"
        type="text"
        autoComplete="given-name"
        autoCapitalize="words"
        placeholder={c.nome.placeholder}
        aria-label={c.nome.placeholder}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        data-clarity-mask="true"
        required
      />
      <Botao type="submit" disabled={!nome.trim()}>
        {c.nome.botao}
      </Botao>
    </form>
  );
}

/* 23 · o plano (rola) */
function Plano(props: TelaProps) {
  const { c, ctx, estado, avancar } = props;
  const r = estado.respostas;
  useSincronizar(props);
  const [hoje, setHoje] = useState<Date | null>(null);
  const etapas = useMemo(() => etapasPlano(c, r, ctx), [c, r, ctx]);
  const t = trabalhoMes(r.pacientes ?? 2, r.depois ?? 2);
  useEffect(() => {
    setHoje(new Date());
    trackPlano(eixoVencedor(r));
  }, [r]);
  return (
    <>
      <h1 className="mapf-h1" tabIndex={-1} data-clarity-mask="true">
        {f(c.plano.titulo, ctx)}
      </h1>
      {hoje && <Timeline etapas={etapas} hoje={hoje} locale={c.locale} diaUm={c.plano.diaUm} diaVarios={c.plano.diaVarios} />}
      <p className="mapf-sub">{f(t.emMinutos ? c.plano.rodapeMinutos : c.plano.rodape, ctx)}</p>
      <Botao onClick={avancar}>{c.plano.botao}</Botao>
    </>
  );
}

type CardsProps = { p: FunilContent["precos"]; card: Card; grupo: string; escolher: (k: Card) => void };

/** Os dois cards selecionáveis: o número grande é o preço por dia. */
function Cards({ p, card: atual, grupo, escolher }: CardsProps) {
  return (
    <div className="mapf-plans" role="radiogroup" aria-label={p.titulo}>
      {(["anual", "mensal"] as Card[]).map((k) => {
        const card = p.cards[k];
        return (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={atual === k}
            className={`mapf-plan${atual === k ? " is-sel" : ""}`}
            onClick={() => escolher(k)}
            id={`mapf-card-${grupo}-${k}`}
          >
            {"selo" in card && <span className="mapf-plan-tag">{card.selo}</span>}
            <span className="mapf-plan-r" aria-hidden="true" />
            <span className="mapf-plan-body">
              <span className="mapf-plan-nm">{card.nome}</span>
              <span className="mapf-plan-sm mapf-num">{card.linha}</span>
            </span>
            <span className="mapf-plan-pd">
              <b className="mapf-num">{card.porDia}</b>
              <span>{card.porDiaRotulo}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function Cta({ rotulo, card, onClick }: { rotulo: string; card: Card; onClick: () => void }) {
  return (
    <a className="mapf-btn" href={linkTeste(card)} target="_blank" rel="noopener" onClick={onClick}>
      {rotulo}
      <IconeSeta />
    </a>
  );
}

/* 24 · preço e teste (rola) */
function Precos({ c, ctx, estado, dispatch, obterEstado }: TelaProps) {
  const p = c.precos;
  const topo = useRef<HTMLDivElement>(null);
  const [barra, setBarra] = useState(false);

  useEffect(() => {
    const alvo = topo.current;
    if (!alvo || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setBarra(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(alvo);
    return () => io.disconnect();
  }, []);

  const comecar = (placement: string) => {
    trackInicioTeste(placement, estado.card);
    void sincronizar(obterEstado, dispatch, estado.card);
  };

  return (
    <>
      <Titulo>{f(p.titulo, ctx)}</Titulo>
      <p className="mapf-sub">{f(p.sub, ctx)}</p>
      <Cards p={p} card={estado.card} grupo="topo" escolher={(k) => dispatch({ tipo: "card", card: k })} />
      <div ref={topo}>
        <Cta rotulo={f(p.botao, ctx)} card={estado.card} onClick={() => comecar("precos_topo")} />
      </div>
      <p className="mapf-fine">{f(p.linha, ctx)}</p>
      {INDICACAO_ATIVA && (
        <p className="mapf-greenbox">
          <strong>{f(p.indicacao.destaque, ctx)}</strong> {f(p.indicacao.texto, ctx)}
        </p>
      )}

      <section className="mapf-sec" aria-labelledby="mapf-tudo">
        <h2 id="mapf-tudo">{p.tudoTitulo}</h2>
        <MiniTimeline hoje={p.hoje} diaN={f(p.diaN, ctx)} />
        <ul className="mapf-tudo">
          {p.tudo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mapf-sec" aria-labelledby="mapf-quem">
        <h2 id="mapf-quem">{p.quemTitulo}</h2>
        <Autor {...c.decisao.autor} />
      </section>

      <section className="mapf-sec" aria-labelledby="mapf-faq">
        <h2 id="mapf-faq">{p.faqTitulo}</h2>
        <div className="mapf-faq">
          {p.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mapf-sec">
        <Cards p={p} card={estado.card} grupo="fim" escolher={(k) => dispatch({ tipo: "card", card: k })} />
        <Cta rotulo={f(p.botao, ctx)} card={estado.card} onClick={() => comecar("precos_fim")} />
        <p className="mapf-fine">{f(p.linha, ctx)}</p>
      </section>

      {/* Fora do card: o backdrop-filter dele prenderia o position: fixed. */}
      {createPortal(
        <div className="map-brand mapf-portal">
          <div className={`mapf-stickybar${barra ? " is-on" : ""}`} aria-hidden={!barra}>
            <span className="mapf-num">{f(p.barra, ctx)}</span>
            <a
              href={linkTeste(estado.card)}
              target="_blank"
              rel="noopener"
              tabIndex={barra ? 0 : -1}
              onClick={() => comecar("precos_barra")}
            >
              {p.barraBotao}
            </a>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

/** Rodapé da /map, só na página de preço, com o aviso legal sem a palavra IA. */
export function RodapePreco({ c }: { c: FunilContent }) {
  return (
    <div className="mapf-footer">
      <Footer language={c.lang} legalNotice={c.avisoLegal} variant="map" />
    </div>
  );
}

export function TelaAtual({ slug, ...props }: TelaProps & { slug: Slug }) {
  const { c } = props;
  switch (slug) {
    case "comecar":
      return <Abertura {...props} />;
    case "area":
      return <AreaTela {...props} />;
    case "pacientes":
      return <Pacientes {...props} />;
    case "primeira":
      return <PerguntaComFrase {...props} chave="primeira" titulo={c.primeira.titulo} opcoes={c.primeira.opcoes} frase={c.primeira.frase} mostra={() => true} />;
    case "antes":
      return <Antes {...props} />;
    case "depois":
      return <Pergunta {...props} chave="depois" titulo={c.depois.titulo} sub={c.depois.sub} opcoes={c.depois.opcoes} />;
    case "invisivel":
      return <Invisivel {...props} />;
    case "exames":
      return <Pergunta {...props} chave="exames" titulo={c.exames.titulo} opcoes={c.exames.opcoes} />;
    case "extracao":
      return <ExtracaoTela {...props} />;
    case "escala-1":
      return <EscalaTela {...props} chave="escala1" e={c.escala1} />;
    case "retorno":
      return <Pergunta {...props} chave="retorno" titulo={c.retorno.titulo} opcoes={c.retorno.opcoes} />;
    case "resumo-retorno":
      return <Resumo {...props} />;
    case "sumiu":
      return <PerguntaComFrase {...props} chave="sumiu" titulo={c.sumiu.titulo} opcoes={c.sumiu.opcoes} frase={c.sumiu.frase} mostra={(i) => i >= 2} />;
    case "delta":
      return <DeltaTela {...props} />;
    case "escala-2":
      return <EscalaTela {...props} chave="escala2" e={c.escala2} />;
    case "decisao":
      return <Decisao {...props} />;
    case "agenda":
      return <Pergunta {...props} chave="agenda" titulo={c.agenda.titulo} opcoes={c.agenda.opcoes} />;
    case "prioridade":
      return <Pergunta {...props} chave="prioridade" titulo={c.prioridade.titulo} opcoes={c.prioridade.opcoes} />;
    case "perfil":
      return <Perfil {...props} />;
    case "montando":
      return <Montando {...props} />;
    case "email":
      return <Email {...props} />;
    case "nome":
      return <Nome {...props} />;
    case "plano":
      return <Plano {...props} />;
    case "precos":
      return <Precos {...props} />;
    default:
      return null;
  }
}
