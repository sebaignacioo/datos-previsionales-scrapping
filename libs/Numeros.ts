export const extraerPorcentaje = (valor: string): number | undefined => {
    if (valor === '-') return undefined;
    return parseFloat((parseFloat(valor.substring(0, valor.indexOf('%')).replaceAll(',', '.')) / 100).toPrecision(7));
};
