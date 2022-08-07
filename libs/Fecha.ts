type Mes = {
    key: string;
    value: number;
};

const meses: Array<Mes> = [
    { key: 'Enero', value: 1 },
    { key: 'Febrero', value: 2 },
    { key: 'Marzo', value: 3 },
    { key: 'Abril', value: 4 },
    { key: 'Mayo', value: 5 },
    { key: 'Junio', value: 6 },
    { key: 'Julio', value: 7 },
    { key: 'Agosto', value: 8 },
    { key: 'Septiembre', value: 9 },
    { key: 'Octubre', value: 10 },
    { key: 'Noviembre', value: 11 },
    { key: 'Diciembre', value: 12 },
];

export const extraerFecha = (fechaTxt: string): Date => {
    if (
        fechaTxt.match(
            /(al \d{2} de (Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre) \d{4})$/
        )
    ) {
        const [dia, mes, anio] = fechaTxt.replaceAll('al ', '').replaceAll(' de ', ' ').trim().split(' ');
        return new Date(`${anio}-${meses.find((m) => m.key === mes)?.value}-${dia}`);
    } else throw new Error('Formato de fecha incorrecto');
};
