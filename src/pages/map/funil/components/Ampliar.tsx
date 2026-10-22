import { useRef } from "react";

type Props = {
  miniatura: string;
  imagem: string;
  alt: string;
  legenda: string;
  fechar: string;
  largura: number;
  altura: number;
};

/** Largura em que o print abre: legível sem zoom; a pessoa rola nos dois eixos ou amplia com pinça. */
const LARGURA_AMPLIADA = 900;

/**
 * Miniatura que amplia ao tocar, num <dialog> nativo em tela cheia (Esc fecha).
 * O botão Fechar fica fixo no canto, numa faixa própria acima da imagem, sem cobri-la.
 */
export function Ampliar({ miniatura, imagem, alt, legenda, fechar, largura, altura }: Props) {
  const dlg = useRef<HTMLDialogElement>(null);
  const alturaAmpliada = Math.round((LARGURA_AMPLIADA * altura) / largura);
  return (
    <figure className="mapf-print">
      <button type="button" className="mapf-print-thumb" onClick={() => dlg.current?.showModal()}>
        <img src={miniatura} alt={alt} width={600} height={Math.round((600 * altura) / largura)} loading="lazy" decoding="async" />
      </button>
      <figcaption>{legenda}</figcaption>
      <dialog ref={dlg} className="mapf-dialog" aria-label={alt}>
        <div className="mapf-dialog-bar">
          <button type="button" className="mapf-dialog-close" onClick={() => dlg.current?.close()} autoFocus>
            {fechar}
          </button>
        </div>
        <div className="mapf-dialog-scroll">
          <img src={imagem} alt={alt} width={LARGURA_AMPLIADA} height={alturaAmpliada} loading="lazy" decoding="async" />
        </div>
      </dialog>
    </figure>
  );
}
