import type { DefinitionProps } from '../../../../../components/DefinitionProps';
import type { OfficeData } from '../../common/common-component/CommonOfficeInfoProps';

export interface InfoUnidad extends OfficeData {
  packages: {
    deliveryHours: string;
    restrictionsUrl?: string;
  };
  visiting: {
    visitingHours: string | null;
    visitingRestrictions: string | null;
    visitingHoursConjugal: string | null;
    visitingRestrictionsConjugal: string | null;
    restrictionsDressCodeUrl: string | null;
  };
}
export interface GeneralInfoUnidad {
  restrictionsText: string[];
}

export interface InrUnidadProps extends DefinitionProps {
  data: InfoUnidad;
  shortAddressDescription: string;
}
