import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerRentasMinimas = async (page: Page) => {
    const [, , trabDepInd, , trabMen18May65, , trabCasaPart, , finesNoRem] = await page
        .locator('table:has-text("RENTAS MÍNIMAS IMPONIBLES")')
        .locator('td')
        .allInnerTexts();
    return {
        TrabDepInd: Libs.Moneda.extraerValorMoneda(trabDepInd),
        TrabMen18May65: Libs.Moneda.extraerValorMoneda(trabMen18May65),
        TrabCasaPart: Libs.Moneda.extraerValorMoneda(trabCasaPart),
        FinesNoRem: Libs.Moneda.extraerValorMoneda(finesNoRem),
    };
};
