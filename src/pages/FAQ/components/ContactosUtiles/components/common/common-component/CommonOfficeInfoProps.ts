


export interface OfficeData {
    departamento: string;
    ciudad: string;
    barrio: string;
    direccion: { texto: string; url?: string };
    telefono: string;
    correo: string;
    web?: { texto: string; url?: string };
    horario: string;
};

export interface CommonOfficeInfoProps {
    title: string;
    data: OfficeData;
};