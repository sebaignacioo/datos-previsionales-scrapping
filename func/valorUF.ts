import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerValorUF = async (page: Page) => {
    const [, from1, value1, from2, value2] = await page
        .locator('table:has-text("VALOR UF")')
        .locator('td')
        .allInnerTexts();
    const fechaFrom1 = Libs.Fecha.extraerFecha(from1);
    const fechaFrom2 = Libs.Fecha.extraerFecha(from2);
    return {
        PeriodoActual: {
            Hasta: fechaFrom1.toISOString(),
            ValorPesos: Libs.Moneda.extraerValorMoneda(value1),
        },
        PeriodoAnterior: {
            Hasta: fechaFrom2.toISOString(),
            ValorPesos: Libs.Moneda.extraerValorMoneda(value2),
        },
    };
};
