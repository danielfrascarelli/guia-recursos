import type { ContentDefinition } from "../../../../components/ItemDefinition";

const commmonOfficeData = {
  departamento: "Montevideo",
  ciudad: "Montevideo",
  barrio: "Belvedere",
  direccion: {
    texto: "Cnel. Bolognesi N° 287 entre Emancipación y General Hornos",
    url: "https://www.google.com/maps/search/?api=1&query=Cnel.+Bolognesi+287,+Montevideo"
  },
  telefono: "4340 2628 int 1600",
  correo: "sai-ppl@minterior.gub.uy",
  web: {
    texto: "sai.minterior.gub.uy",
    url: "https://sai.minterior.gub.uy"
  },
  horario: "9 hs a 16 hs"
} as const;

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "orange",
      url: "instituto-nacional-de-rehabilitacion",
      componentType: "InrComponent",
      props: {
        title: "Instituto Nacional de Rehabilitación",
      },
    },
    {
      id: "2",
      variant: "green",
      url: "6",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "ASSE Sistema de Atención Integral - Personas Privadas de Libertad (SAI - PPL)",
        data: commmonOfficeData
      },
    },
    {
      id: "3",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Programa Nacional de Educación en Cárceles – MEC",
        data: commmonOfficeData
      },
    },
    {
      id: "4",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Dirección Nacional de Apoyo al Liberado (DINALI - MIDES)",
        data: commmonOfficeData
      },
    },
    {
      id: "5",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Dirección Nacional de Medidas Alternativas (DINAMA – INR)",
        data: commmonOfficeData
      },
    },
    {
      id: "6",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Comisionado Parlamentario Penitenciario",
        data: commmonOfficeData
      },
    },
    {
      id: "7",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Instituto Nacional de Derechos Humanos y Defensoria del Pueblo - (INDDHH)",
        data: commmonOfficeData
      },
    },
    {
      id: "8",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Mecanismo Nacional de Prevención de la Tortura - (MNP)",
        data: commmonOfficeData
      },
    },
    {
      id: "9",
      variant: "orange",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Defensoría Pública de Ejecución Penal",
        data: commmonOfficeData
      },
    },
    {
      id: "10",
      variant: "green",
      url: "7",
      componentType: "CommonOfficeInfoComponent",
      props: {
        title: "Juzgado Letrado de Ejecución y Vigilancia",
        data: commmonOfficeData
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
 