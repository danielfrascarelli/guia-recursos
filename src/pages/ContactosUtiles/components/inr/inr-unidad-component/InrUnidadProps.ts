import type { DefinitionProps } from "../../../../../components/DefinitionProps";
import type { OfficeData } from "../../common/common-component/CommonOfficeInfoProps";

export interface InfoUnidad extends OfficeData {
    packages: {
        deliveryHours: string;
        restrictionsUrl?: string;
    };
    visiting: {
        visitingHours: string;
        restrictionsDressCodeUrl?: string;
        restrictionsText: string[];
    };
};

export interface InrUnidadProps extends DefinitionProps {
    data: InfoUnidad;
    shortAddressDescription: string;
};