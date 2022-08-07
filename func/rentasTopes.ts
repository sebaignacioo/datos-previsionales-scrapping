import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerRentasTopes = async (page: Page) => {
    const [, titleAFP, afp, titleIPS, ips, titleAFC, afc] = await page
        .locator('table:has-text("RENTAS TOPES IMPONIBLES")')
        .locator('td')
        .allInnerTexts();
    return {
        AFP: {
            ValorPesos: Libs.Moneda.extraerValorMoneda(afp),
            ValorUF: Libs.Misc.getUFDesdeTitulo(titleAFP),
        },
        IPS: {
            ValorPesos: Libs.Moneda.extraerValorMoneda(ips),
            ValorUF: Libs.Misc.getUFDesdeTitulo(titleIPS),
        },
        AFC: {
            ValorPesos: Libs.Moneda.extraerValorMoneda(afc),
            ValorUF: Libs.Misc.getUFDesdeTitulo(titleAFC),
        },
    };
};
