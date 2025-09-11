import { AlertIcon } from "../../../../assets/icons/icons";
import type { ContentDefinition } from "../../../../components/ItemDefinition";

import asseDataJson from "../../../../data/offices/asse.json";
import type { OfficeData } from "./components/common/common-component/CommonOfficeInfoProps";



export function getContentDefinition(): ContentDefinition[] {

  const asseData: OfficeData = asseDataJson;

  const items = [
    {
      id: "1",
      variant: "orange",
      url: "instituto-nacional-de-rehabilitacion",
      componentType: "InrComponent",
      props: {
        title: "Instituto Nacional de Rehabilitación",
        imageUrl: "/src/assets/images/logos_contactos_utiles/logo_inr.png",
      },
    },
    {
      id: "2",
      variant: "green",
      url: "6",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "ASSE (SAI - PPL)",
        imageUrl: "/src/assets/images/logos_contactos_utiles/asse.png",
        data: asseData
      },
    },
    {
      id: "3",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Programa Nacional de Educación en Cárceles",
        imageUrl: "/src/assets/images/logos_contactos_utiles/pnec.png",
        data: asseData
      },
    },
    {
      id: "4",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Dirección Nacional de Apoyo al Liberado",
        imageUrl: "/src/assets/images/logos_contactos_utiles/dinali.png",
        data: asseData
      },
    },
    {
      id: "5",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Dirección Nacional de Medidas Alternativas (DINAMA)",
        data: asseData
      },
    },
    {
      id: "6",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Comisionado Parlamentario Penitenciario",
        imageUrl: "/src/assets/images/logos_contactos_utiles/comisionado.parlamentario.png",
        data: asseData
      },
    },
    {
      id: "7",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Instituto Nacional de Derechos Humanos y Defensoria del Pueblo",
        imageUrl: "/src/assets/images/logos_contactos_utiles/inddhh.png",
        data: asseData
      },
    },
    {
      id: "8",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Mecanismo Nacional de Prevención de la Tortura",
        data: asseData
      },
    },
    {
      id: "9",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Defensoría Pública de Ejecución Penal",
        data: asseData
      },
    },
    {
      id: "10",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Juzgado Letrado de Ejecución y Vigilancia",
        data: asseData
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
