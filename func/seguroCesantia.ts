import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerAFC = async (page: Page) => {
    const [
        ,
        ,
        ,
        ,
        ,
        ,
        plazoIndEmp,
        plazoIndTrab,
        ,
        plazoFijoEmp,
        plazoFijoTrab,
        ,
        plazoIndMas11AnnosEmp,
        plazoIndMas11AnnosTrab,
        ,
        trabCasaPartEmp,
        trabCasaPartTrab,
    ] = await page.locator('table:has-text("SEGURO DE CESANTÍA (AFC)")').locator('td').allInnerTexts();
    return {
        PlazoInd: {
            Empleador: Libs.Numeros.extraerPorcentaje(plazoIndEmp) ?? null,
            Trabajador: Libs.Numeros.extraerPorcentaje(plazoIndTrab) ?? null,
        },
        PlazoFijo: {
            Empleador: Libs.Numeros.extraerPorcentaje(plazoFijoEmp) ?? null,
            Trabajador: Libs.Numeros.extraerPorcentaje(plazoFijoTrab) ?? null,
        },
        PlazoIndMas11Annos: {
            Empleador: Libs.Numeros.extraerPorcentaje(plazoIndMas11AnnosEmp) ?? null,
            Trabajador: Libs.Numeros.extraerPorcentaje(plazoIndMas11AnnosTrab) ?? null,
        },
        TrabCasaPart: {
            Empleador: Libs.Numeros.extraerPorcentaje(trabCasaPartEmp) ?? null,
            Trabajador: Libs.Numeros.extraerPorcentaje(trabCasaPartTrab) ?? null,
        },
    };
};
