export const extraerValorMoneda = (valor: string): number =>
    valor === '-' ? 0 : +valor.replaceAll('$', '').replaceAll('.', '').replaceAll(',', '.').trim();
