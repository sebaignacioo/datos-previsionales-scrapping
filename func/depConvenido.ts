import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerDepConvenido = async (page: Page) => {
    const [, tituloTopeAnual, topeAnual] = await page
        .locator('table:has-text("DEPÓSITO CONVENIDO")')
        .locator('td')
        .allInnerTexts();
    return {
        ValorPesos: Libs.Moneda.extraerValorMoneda(topeAnual),
        ValorUF: Libs.Misc.getUFDesdeTitulo(tituloTopeAnual),
    };
};
