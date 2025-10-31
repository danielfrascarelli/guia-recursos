import type { DefinitionProps } from "../../../../../components/DefinitionProps";
import type { OfficeData } from "../../common/common-component/CommonOfficeInfoProps";

export interface InfoOffice extends OfficeData {
    // name: string;
    // departamento: string;
    // ciudad: string;
    // barrio: string;
    // direccion: Address;
    // telefonos: Phone[];
    // correos: Email[];
};

export interface InrOfficeProps extends DefinitionProps {
    data: InfoOffice;
};