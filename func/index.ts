import { obtenerPeriodo } from './periodo';
import { obtenerValoresUtilidad } from './valoresUtilidad';
import { obtenerValorUF } from './valorUF';
import { obtenerRentasTopes } from './rentasTopes';
import { obtenerRentasMinimas } from './rentasMinimas';
import { obtenerAPV } from './apv';
import { obtenerDepConvenido } from './depConvenido';
import { obtenerAFC } from './seguroCesantia';
import { obtenerDistSaludEmpCCAF } from './distSaludEmpCCAF';
import { obtenerAFP } from './afp';
import { obtenerAsigFam } from './asignacionFamiliar';

export default {
    Periodo: {
        obtenerPeriodo,
    },
    ValoresUtilidad: {
        obtenerValoresUtilidad,
    },
    ValorUF: {
        obtenerValorUF,
    },
    RentasTopes: {
        obtenerRentasTopes,
    },
    RentasMinimas: {
        obtenerRentasMinimas,
    },
    APV: {
        obtenerAPV,
    },
    DepConvenido: {
        obtenerDepConvenido,
    },
    SeguroCesantia: {
        obtenerAFC,
    },
    DistSaludEmpCCAF: {
        obtenerDistSaludEmpCCAF,
    },
    AFP: {
        obtenerAFP,
    },
    AsignacionFamiliar: {
        obtenerAsigFam,
    },
};
