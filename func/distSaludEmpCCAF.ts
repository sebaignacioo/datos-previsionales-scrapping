import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerDistSaludEmpCCAF = async (page: Page) => {
    const [, , porcCCAF, , porcFonasa] = await page
        .locator('table:has-text("DISTRIBUCIÓN DEL 7% SALUD, PARA EMPLEADORES AFILIADOS A CCAF")')
        .locator('td')
        .allInnerTexts();
    return {
        CCAF: Libs.Numeros.extraerPorcentaje(porcCCAF),
        Fonasa: Libs.Numeros.extraerPorcentaje(porcFonasa),
    };
};
