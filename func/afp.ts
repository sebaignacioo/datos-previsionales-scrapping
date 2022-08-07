import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerAFP = async (page: Page) => {
    const datosAFPs = (
        await page.locator('table:has-text("TASA COTIZACIÓN OBLIGATORIO AFP")').locator('td').allInnerTexts()
    ).slice(8);
    const afps: Array<any> = [];
    const porcs: Array<any> = [];
    for (let i = 0; i < datosAFPs.length; i += 4) {
        afps.push(datosAFPs[i]);
        porcs.push({
            TasaDepAFP: Libs.Numeros.extraerPorcentaje(datosAFPs[i + 1]),
            TasaDepSIS: Libs.Numeros.extraerPorcentaje(datosAFPs[i + 2]),
            TasaIndAFP: Libs.Numeros.extraerPorcentaje(datosAFPs[i + 3]),
        });
    }
    return porcs.reduce((acc, cur, i) => ({ ...acc, [afps[i]]: cur }), {});
};
