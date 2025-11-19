import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import type { OfficeData } from "../../common/common-component/CommonOfficeInfoProps";

import familiaDataJson from '../../../../../data/inr/offices/familia.json';
import ciddDataJson from '../../../../../data/inr/offices/cidd.json';
import diversidadDataJson from '../../../../../data/inr/offices/diversidad.json';

export function getContentDefinition(): ContentDefinition[] {
  const familiaData: OfficeData = familiaDataJson;
  const ciddData: OfficeData = ciddDataJson;
  const diversidadData: OfficeData = diversidadDataJson;

  const items = [
    {
      id: "office-1",
      iconLabel: "1",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Atención a la Familia de Personas Privadas de Libertad",
        data: familiaData
      },
      url: "oficinas/1"
    },
    {
      id: "office-2",
      iconLabel: "2",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Centro de Ingreso, Diagnóstico y Derivación (CIDD)",
        data: ciddData
      },
      url: "oficinas/2"
    },
    {
      id: "office-3",
      iconLabel: "3",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Departamento de Género y Diversidad",
        data: diversidadData
      },
      url: "oficinas/3"
    }
  ] satisfies ContentDefinition[];
  return items;
}



// / / / / / / /
// Se eliminó:
// / / / / / / /

// {
//   id: "office-2",
//   iconLabel: "2",
//   variant: "pretty_white",
//   componentType: "InrOfficeComponent",
//   props: {
//     title: "**Junta Nacional de Traslados",
//     data: trasladosData
//   },
//   url: "oficinas/2"
// },
// {
//   id: "office-3",
//   iconLabel: "3",
//   variant: "pretty_white",
//   componentType: "InrOfficeComponent",
//   props: {
//     title: "**Subdirección Nacional Técnica",
//     data: nacionalTecnicaData
//   },
//   url: "oficinas/3"
// },
// {
//   id: "office-4",
//   iconLabel: "4",
//   variant: "pretty_white",
//   componentType: "InrOfficeComponent",
//   props: {
//     title: "**Subdirección Nacional Operativa",
//     data: nacionalOperativaData
//   },
//   url: "oficinas/4"
// },