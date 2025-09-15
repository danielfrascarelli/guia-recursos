 
import type { OfficeData } from "./components/common/common-component/CommonOfficeInfoProps";

import logo_inr from "../../assets/images/logos_contactos_utiles/logo_inr.png" 
import asse from "../../assets/images/logos_contactos_utiles/asse.png";
import pnec from "../../assets/images/logos_contactos_utiles/pnec.png";
import dinali from "../../assets/images/logos_contactos_utiles/dinali.png";
import comisionado_parlamentario from "../../assets/images/logos_contactos_utiles/comisionado.parlamentario.png";
import inddhh from "../../assets/images/logos_contactos_utiles/inddhh.png";
import type { ContentDefinition } from "../../components/ItemDefinition";
import asseDataJson from '../../data/offices/asse.json'; 

export function getContentDefinition(): ContentDefinition[] {

  const asseData: OfficeData = asseDataJson;

  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "instituto-nacional-de-rehabilitacion",
      componentType: "InrComponent",
      props: {
        title: "Instituto Nacional de Rehabilitación",
        imageUrl: logo_inr,
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "asse",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "ASSE (SAI - PPL)",
        imageUrl: asse,
        data: asseData
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "pnec",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Programa Nacional de Educación en Cárceles",
        imageUrl: pnec,
        data: asseData
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "dinali",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Dirección Nacional de Apoyo al Liberado",
        imageUrl: dinali,
        data: asseData
      },
    },
    {
      id: "5",
      variant: "pretty_white",
      url: "dinama",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Dirección Nacional de Medidas Alternativas (DINAMA)",
        data: asseData
      },
    },
    {
      id: "6",
      variant: "pretty_white",
      url: "comisionado-parlamentario",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Comisionado Parlamentario Penitenciario",
        imageUrl: comisionado_parlamentario,
        data: asseData
      },
    },
    {
      id: "7",
      variant: "pretty_white",
      url: "inddhh",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Instituto Nacional de Derechos Humanos y Defensoria del Pueblo",
        imageUrl: inddhh,
        data: asseData
      },
    },
    {
      id: "8",
      variant: "pretty_white",
      url: "mnpt",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Mecanismo Nacional de Prevención de la Tortura",
        imageUrl: inddhh,
        data: asseData
      },
    },
    {
      id: "9",
      variant: "pretty_white",
      url: "dpep",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Defensoría Pública de Ejecución Penal",
        data: asseData
      },
    },
    {
      id: "10",
      variant: "pretty_white",
      url: "jlev",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Juzgado Letrado de Ejecución y Vigilancia",
        data: asseData
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
