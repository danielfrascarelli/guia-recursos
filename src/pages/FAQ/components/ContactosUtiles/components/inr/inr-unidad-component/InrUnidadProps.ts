export type Telefono = { area: string; numeros: string };
export type Correo = { area: string; email: string };


export interface InfoUnidad {
    departamento: string;
    ciudad: string;
    barrio: string;
    direccion: { texto: string; url?: string };
    telefonos: Telefono[];
    correos: Correo[];
    paquetes: {
        horarioEntrega: string;
        restriccionesArticulosUrl?: string;
    };
    visitas: {
        horario: string;
        restriccionesVestimentaUrl?: string;
        restriccionesTexto: string[];
    };
};

export interface InrUnidadProps {
    title: string;
    data: InfoUnidad;
};