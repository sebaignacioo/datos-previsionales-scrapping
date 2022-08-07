import { Page } from 'playwright';

import Libs from '../libs';

export const obtenerAsigFam = async (page: Page) => {
    const datosAsigFam = (
        await page.locator('table:has-text("ASIGNACIÓN FAMILIAR")').locator('td').allInnerTexts()
    ).slice(4);
    const tramos: Array<any> = [];
    const porcs: Array<any> = [];
    for (let i = 0; i < datosAsigFam.length; i += 3) {
        tramos.push(datosAsigFam[i][3]);
        const reqRenta = Libs.Misc.getReqRenta(datosAsigFam[i + 2]);
        porcs.push({
            Monto: Libs.Moneda.extraerValorMoneda(datosAsigFam[i + 1]),
            Requisito: {
                Desde: i === 0 ? 0 : reqRenta[0],
                Hasta: i === datosAsigFam.length - 3 ? null : i === 0 ? reqRenta[0] : reqRenta[1],
            },
        });
    }
    return {
        tramos: porcs.reduce((acc, cur, i) => ({ ...acc, [tramos[i]]: cur }), {}),
    };
};
