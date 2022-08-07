import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerAPV = async (page: Page) => {
    const [, tituloTopeMensual, topeMensual, tituloTopeAnual, topeAnual] = await page
        .locator('table:has-text("AHORRO PREVISIONAL VOLUNTARIO")')
        .locator('td')
        .allInnerTexts();
    return {
        TopeMensual: {
            ValorPesos: Libs.Moneda.extraerValorMoneda(topeMensual),
            ValorUF: Libs.Misc.getUFDesdeTitulo(tituloTopeMensual),
        },
        TopeAnual: {
            ValorPesos: Libs.Moneda.extraerValorMoneda(topeAnual),
            ValorUF: Libs.Misc.getUFDesdeTitulo(tituloTopeAnual),
        },
    };
};
