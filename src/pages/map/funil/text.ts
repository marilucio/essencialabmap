// Preenche os marcadores dos textos do funil ({paciente}, {dias}…).
// {Paciente} (primeira letra maiúscula) devolve o valor capitalizado.
// Marcador sem valor fica como está, para aparecer na revisão em vez de sumir.

export type TextoCtx = Record<string, string | number | undefined>;

const capitalizar = (s: string) => s.charAt(0).toLocaleUpperCase("pt-BR") + s.slice(1);

export function fill(texto: string, ctx: TextoCtx): string {
  return texto.replace(/\{([^{}]+)\}/g, (marca, chave: string) => {
    const direta = ctx[chave];
    if (direta !== undefined) return String(direta);
    const minuscula = chave.charAt(0).toLocaleLowerCase("pt-BR") + chave.slice(1);
    const valor = ctx[minuscula];
    return valor === undefined ? marca : capitalizar(String(valor));
  });
}
