import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerValoresUtilidad = async (page: Page) => {
    const [, , , , valorUTM, valorUTA] = await page.locator('table:has-text("UTM")').locator('td').allInnerTexts();
    return {
        ValorUTM: Libs.Moneda.extraerValorMoneda(valorUTM),
        ValorUTA: Libs.Moneda.extraerValorMoneda(valorUTA),
    };
};
