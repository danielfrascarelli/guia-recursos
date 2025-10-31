
import type { OfficeData } from "./components/common/common-component/CommonOfficeInfoProps";

import logo_inr from "../../assets/images/logos_contactos_utiles/logo_inr.png"
import asse from "../../assets/images/logos_contactos_utiles/asse.png";
import pnec from "../../assets/images/logos_contactos_utiles/pnec.png";
import dinali from "../../assets/images/logos_contactos_utiles/dinali.png";
import comisionado_parlamentario from "../../assets/images/logos_contactos_utiles/comisionado.parlamentario.png";
import inddhh from "../../assets/images/logos_contactos_utiles/inddhh.png";
import type { ContentDefinition } from "../../components/ItemDefinition";

import asseDataJson from '../../data/institutes/asse.json';
import pnecDataJson from '../../data/institutes/pnec.json';
import dinaliDataJson from '../../data/institutes/dinali.json';
import dinamaDataJson from '../../data/institutes/dinama.json';
import comisionadoDataJson from '../../data/institutes/comisionado.json';
import inddhhMnpDataJson from '../../data/institutes/inddhh-mnp.json';
import dpepDataJson from '../../data/institutes/dpep.json';
import jlevDataJson from '../../data/institutes/jlev.json';
import type { JLEVOfficeData } from "./components/jlev-component/JLEVOfficeInfoProps";

export function getContentDefinition(): ContentDefinition[] {

  const asseData: OfficeData = asseDataJson;
  const pnecData: OfficeData = pnecDataJson;
  const dinaliData: OfficeData = dinaliDataJson;
  const dinamaData: OfficeData = dinamaDataJson;
  const comisionadoData: OfficeData = comisionadoDataJson;
  const inddhhMnpData: OfficeData = inddhhMnpDataJson;
  const dpepData: OfficeData = dpepDataJson;
  const jlevData: JLEVOfficeData = jlevDataJson;

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
        data: pnecData
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
        data: dinaliData
      },
    },
    {
      id: "5",
      variant: "pretty_white",
      url: "dinama",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Dirección Nacional de Medidas Alternativas (DINAMA)",
        data: dinamaData
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
        data: comisionadoData
      },
    },
    {
      id: "7",
      variant: "pretty_white",
      url: "inddhh",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Instituto Nacional de Derechos Humanos y Defensoria del Pueblo - Mecanismo Nacional de Prevención de la Tortura",
        imageUrl: inddhh,
        data: inddhhMnpData
      },
    },
    {
      id: "8",
      variant: "pretty_white",
      url: "dpep",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Defensoría Pública de Ejecución Penal",
        data: dpepData
      },
    },
    {
      id: "9",
      variant: "pretty_white",
      url: "jlev",
      componentType: "JLEVOfficeInfoComponent",
      props: {
        title: "Juzgado Letrado de Ejecución y Vigilancia",
        data: jlevData
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
