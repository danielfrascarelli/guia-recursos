import type { DefinitionProps } from "../../../../components/DefinitionProps";
import type { OfficeData } from "../common/common-component/CommonOfficeInfoProps";

export interface JLEVOfficeData extends OfficeData {
    areas: OfficeData[];
};


export interface JLEVOfficeInfoProps extends DefinitionProps {
    title: string;
    data: JLEVOfficeData;
};