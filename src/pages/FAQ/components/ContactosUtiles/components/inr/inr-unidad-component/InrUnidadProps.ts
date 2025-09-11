import type { DefinitionProps } from "../../../../../../../components/DefinitionProps";

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

export interface InrUnidadProps extends DefinitionProps {
    data: InfoUnidad;
    // number: number;
    shortAddressDescription: string;
};