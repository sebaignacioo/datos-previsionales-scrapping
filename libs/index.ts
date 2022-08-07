import { extraerFecha } from './Fecha';
import { extraerValorMoneda } from './Moneda';
import { extraerPorcentaje } from './Numeros';

const getUFDesdeTitulo = (titulo: string): number => {
    const xd = titulo.replaceAll('(', '').split(' ');
    const i = xd.findIndex((e) => e.includes('UF')) - 1;
    return extraerValorMoneda(xd[i]);
};

const getReqRenta = (titulo: string): Array<number> => {
    return titulo
        .split('$')
        .map((e) =>
            e.replaceAll(' ', '').replaceAll('.', '').replaceAll('<', '').replaceAll('>', '').replaceAll('=', '')
        )
        .filter((e) => !isNaN(parseInt(e)))
        .map((e) => parseInt(e));
};

export default {
    Fecha: {
        extraerFecha,
    },
    Moneda: {
        extraerValorMoneda,
    },
    Numeros: {
        extraerPorcentaje,
    },
    Misc: {
        getUFDesdeTitulo,
        getReqRenta,
    },
};
