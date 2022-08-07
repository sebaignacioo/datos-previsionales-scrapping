import { chromium, Page } from 'playwright';

import Funciones from '../func';

const getDataFromPage = async (page: Page) => {
    const valorUF = await Funciones.ValorUF.obtenerValorUF(page);
    const valoresUtilidad = await Funciones.ValoresUtilidad.obtenerValoresUtilidad(page);
    const periodo = Funciones.Periodo.obtenerPeriodo(valorUF.PeriodoActual.Hasta);
    const rentasTopes = await Funciones.RentasTopes.obtenerRentasTopes(page);
    const rentasMinimas = await Funciones.RentasMinimas.obtenerRentasMinimas(page);
    const apv = await Funciones.APV.obtenerAPV(page);
    const depConvenido = await Funciones.DepConvenido.obtenerDepConvenido(page);
    const afc = await Funciones.SeguroCesantia.obtenerAFC(page);
    const distSaludEmpCCAF = await Funciones.DistSaludEmpCCAF.obtenerDistSaludEmpCCAF(page);
    const afp = await Funciones.AFP.obtenerAFP(page);
    const asignacionFamiliar = await Funciones.AsignacionFamiliar.obtenerAsigFam(page);
    return {
        Periodo: periodo,
        Indicadores: {
            UF: valorUF,
            ...valoresUtilidad,
        },
        RentasTopes: rentasTopes,
        RentasMinimas: rentasMinimas,
        APV: apv,
        DepConvenido: depConvenido,
        SeguroCesantia: afc,
        DistSaludEmpCCAF: distSaludEmpCCAF,
        AFP: afp,
        AsignacionFamiliar: asignacionFamiliar,
    };
};

export const recover = async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.previred.com/web/previred/indicadores-previsionales');
    const data = await getDataFromPage(page);
    await browser.close();
    return data;
};
