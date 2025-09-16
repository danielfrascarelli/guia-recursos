import type { DefinitionProps } from "../../../../../components/DefinitionProps";

 
export interface Phone {
    area: string,
    phone: string
}
export interface Email {
    area: string,
    email: string
}
export interface Url {
    text: string,
    url: string
}

export interface OfficeData {
    department: string;
    city: string;
    neighborhood: string;
    address: Url;
    phone: Phone[];
    email: Email[];
    web?: Url;
    openingHours: string;
};

export interface CommonOfficeInfoProps extends DefinitionProps {
    data: OfficeData;
};