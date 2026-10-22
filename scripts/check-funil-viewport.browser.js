// Confere que as 21 telas fixas do funil /map/comecar cabem em 375×812 sem rolar.
// Roda no navegador, numa aba aberta no site (local ou deploy preview), por
// exemplo colando no console: abre cada tela num iframe 375×812 com respostas
// de três perfis (A típico, B textos mais longos, C "Outra área") e mede a
// altura do documento com as animações já no estado final. Na tela 5, confere
// também que os rótulos da teia têm no mínimo 9,5 px e cabem no SVG.
// Resultado: { ok, falhas: [...], medidas: [...] } (medidas com a folga em px).
(async () => {
  const LARGURA = 375;
  const ALTURA = 812;
  const FIXAS = [
    "comecar", "area", "pacientes", "primeira", "antes", "depois", "invisivel", "exames", "extracao",
    "escala-1", "retorno", "sumiu", "delta", "escala-2", "decisao", "agenda", "prioridade", "perfil",
    "montando", "email", "nome",
  ];
  const base = { leadId: "00000000-0000-4000-8000-000000000001", eventId: "00000000-0000-4000-8000-000000000002", nome: "Ana", card: "anual", v: 1 };
  const PERFIS = {
    A: { area: "nutricionista", pacientes: 2, primeira: 1, depois: 2, exames: 0, escala1: 4, retorno: 1, sumiu: 2, escala2: 4, agenda: 0, prioridade: 0 },
    B: { area: "terapeuta", pacientes: 4, primeira: 2, depois: 0, exames: 3, escala1: 5, retorno: 3, sumiu: 3, escala2: 5, agenda: 3, prioridade: 3 },
    C: { area: "outra", pacientes: 0, primeira: 0, depois: 3, exames: 1, escala1: 2, retorno: 2, sumiu: 1, escala2: 2, agenda: 2, prioridade: 1 },
  };
  // Telas em que a frase aparece depois de responder: mede também com a frase.
  const CLIQUE = { primeira: 1, sumiu: 2 };
  const FINAL = `*,*::before,*::after{animation:none!important;transition:none!important}
    .mapf-pts li,.mapf-ex tbody tr,.mapf-rs-blk{opacity:1!important;transform:none!important}`;

  const espera = (ms) => new Promise((r) => setTimeout(r, ms));
  const medidas = [];
  const falhas = [];

  for (const [perfil, respostas] of Object.entries(PERFIS)) {
    sessionStorage.setItem("essencialab_mapf_v1", JSON.stringify({ ...base, respostas }));
    for (const slug of FIXAS) {
      const frame = document.createElement("iframe");
      frame.style.cssText = `position:fixed;left:0;top:0;width:${LARGURA}px;height:${ALTURA}px;border:0;opacity:0;pointer-events:none`;
      frame.src = slug === "comecar" ? "/map/comecar" : `/map/comecar/${slug}`;
      const carregou = new Promise((r) => frame.addEventListener("load", r, { once: true }));
      document.body.appendChild(frame);
      await carregou;
      await espera(350);
      const doc = frame.contentDocument;
      const estilo = doc.createElement("style");
      estilo.textContent = FINAL;
      doc.head.appendChild(estilo);
      if (CLIQUE[slug] !== undefined) {
        doc.querySelectorAll(".mapf-opt")[CLIQUE[slug]]?.click();
        await espera(120);
      }
      const altura = doc.documentElement.scrollHeight;
      const largura = doc.documentElement.scrollWidth;
      const caminho = frame.contentWindow.location.pathname;
      // Folga: espaço livre entre o card e as bordas da área central (px).
      const folga = doc.querySelector(".mapf-main").clientHeight - doc.querySelector(".mapf-card").offsetHeight - 10;
      // Teia (tela 5): rótulos com no mínimo 9,5 px e inteiros dentro do SVG.
      let rotuloMin = null;
      let rotulosDentro = true;
      const teia = doc.querySelector(".mapf-teia");
      if (teia) {
        const caixa = teia.getBoundingClientRect();
        for (const t of teia.querySelectorAll("text")) {
          const r = t.getBoundingClientRect();
          const px = parseFloat(frame.contentWindow.getComputedStyle(t).fontSize) * (caixa.width / teia.viewBox.baseVal.width);
          rotuloMin = Math.min(rotuloMin ?? px, px);
          if (r.left < caixa.left - 0.5 || r.right > caixa.right + 0.5 || r.top < caixa.top - 0.5 || r.bottom > caixa.bottom + 0.5) rotulosDentro = false;
        }
      }
      const teiaOk = rotuloMin === null || (rotuloMin >= 9.5 && rotulosDentro);
      const medida = { perfil, slug, altura, largura, folga, caminho, rotuloMin, rotulosDentro, ok: altura <= ALTURA && largura <= LARGURA && teiaOk };
      medidas.push(medida);
      if (!medida.ok) falhas.push(medida);
      frame.remove();
    }
  }
  return { ok: falhas.length === 0, falhas, medidas };
})();
