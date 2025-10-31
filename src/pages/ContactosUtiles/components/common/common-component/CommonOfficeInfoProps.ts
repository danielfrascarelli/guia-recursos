import type { DefinitionProps } from "../../../../../components/DefinitionProps";
import type { Address } from "../../../../../shared/Address";
import type { Email } from "../../../../../shared/Email";
import type { Phone } from "../../../../../shared/Phone";
import type { Url } from "../../../../../shared/Url";

export interface OfficeData {
    shortName: string | null;
    longName: string | null;
    department: string | null;
    city: string | null;
    neighborhood: string | null;
    address: Address | null;
    phone: Phone[] | null;
    email: Email[] | null;
    web?: Url | null;
    openingHours: string | null;
};

export interface CommonOfficeInfoProps extends DefinitionProps {
    title: string;
    data: OfficeData;
};