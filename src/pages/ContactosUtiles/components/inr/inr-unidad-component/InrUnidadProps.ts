import type { DefinitionProps } from "../../../../../components/DefinitionProps";
import type { Address } from "../../../../../shared/Address";
import type { Email } from "../../../../../shared/Email";
import type { Phone } from "../../../../../shared/Phone";

export interface InfoUnidad {
    departamento: string;
    ciudad: string;
    barrio: string;
    direccion: Address;
    telefonos: Phone[];
    correos: Email[];
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
    shortAddressDescription: string;
};