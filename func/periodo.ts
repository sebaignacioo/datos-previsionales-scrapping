export const obtenerPeriodo = (date: string) => {
    const datePeriodo = new Date(date);
    const mes = `${datePeriodo.getMonth() + 1 < 10 ? '0' + (datePeriodo.getMonth() + 1) : datePeriodo.getMonth() + 1}`;
    const anno = `${datePeriodo.getFullYear()}`;
    return {
        PeriodoStr: `${mes}/${anno}`,
        Mes: parseInt(mes),
        Anno: parseInt(anno),
        FechaISO: new Date(
            datePeriodo.getFullYear(),
            datePeriodo.getMonth(),
            datePeriodo.getDate(),
            23,
            59,
            59,
            999
        ).toISOString(),
    };
};
