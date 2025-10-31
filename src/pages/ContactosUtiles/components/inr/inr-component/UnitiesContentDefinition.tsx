import type { ContentDefinition } from "../../../../../components/ItemDefinition";


export const data = {
  departamento: "Montevideo",
  ciudad: "Montevideo",
  barrio: "Punta de Rieles",
  direccion: {
    texto: "Camino Dionisos 6350 esquina Chacarita de los Padres",
    url: "https://maps.google.com/?q=Camino+Dionisos+6350,+Montevideo"
  },
  telefonos: [
    { area: "Sub–dirección administrativa", phones: ["4340 2628 int 17"] },
    { area: "Sub–dirección operativa", phones: ["2030 9510"] },
    { area: "Sub–dirección técnica", phones: ["2030 9510 / 4340 3308"] }
  ],
  correos: [
    { area: "Sub–dirección administrativa", emails: ["inr-u-9.secretaria@minterior.gub.uy"] },
    { area: "Sub–dirección operativa", emails: ["inr-u-9.operativa@minterior.gub.uy"] },
    { area: "Sub–dirección técnica", emails: ["inr-u-9.tecnica@minterior.gub.uy"] }
  ],
  paquetes: {
    horarioEntrega: "dentro del horario de visita.",
    restriccionesArticulosUrl: "#" // poné la URL real de “click aquí” si la tenés
  },
  visitas: {
    horario: "8 hs a 15 hs (los días dependen del sector)",
    restriccionesVestimentaUrl: "#", // poné la URL real de “click aquí”
    restriccionesTexto: [
      "La misma debe estar registrada, previa solicitud de la persona solicitando que sea ingresada.",
      "Recibe un máximo de 4 visitantes, incluidos menores.",
      "El ingreso de menores cuando es traído por la mamá deberá acompañarse de venir de cédula de identidad; cuando ingresa con otro mayor, debe ser por solicitud especial, partida de nacimiento y consentimiento de la madre o tutor.",
      "También tendrá restricciones para el ingreso a la visita toda aquella visita que tenga un impedimento judicial, o se encuentre sancionada."
    ]
  }
};

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "unidad-1",
      iconLabel: "1",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        shortAddressDescription: "Punta de Rieles, Montevideo",
        title: "Unidad 1",
        data
      },
      url: "unidad-1"
    }
    , {
      id: "unidad-2",
      iconLabel: "2",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 2",
        shortAddressDescription: "Chacra de Libertad, San José",
        data
      },
      url: "unidad-2"
    },
    {
      id: "unidad-3",
      iconLabel: "3",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 3",
        shortAddressDescription: "Penal de Libertad, San José ",
        data
      },
      url: "unidad-3"
    }, {
      id: "unidad-4",
      iconLabel: "4",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 4",
        shortAddressDescription: "Santiago Vázquez, Montevideo",
        data
      },
      url: "unidad-4"
    },
    {
      id: "unidad-5",
      iconLabel: "5",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 5",
        shortAddressDescription: "CMRF, Montevideo",
        data
      },
      url: "unidad-5"
    },
    {
      id: "unidad-6",
      iconLabel: "6",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 6",
        shortAddressDescription: "Punta de Rieles, Montevideo",
        data
      },
      url: "unidad-6"
    },
    {
      id: "unidad-7",
      iconLabel: "7",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 7",
        shortAddressDescription: "Chacra Policial, Canelones",
        data
      },
      url: "unidad-7"
    },
    {
      id: "unidad-8",
      iconLabel: "8",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 8",
        shortAddressDescription: "Domingo Arena, Montevideo",
        data
      },
      url: "unidad-8"
    },
    {
      id: "unidad-9",
      iconLabel: "9",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 9",
        shortAddressDescription: "Montevideo",
        data
      },
      url: "unidad-9"
    },
    {
      id: "unidad-10",
      iconLabel: "10",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 10",
        shortAddressDescription: "Soler, San José",
        data
      },
      url: "unidad-10"
    },
    {
      id: "unidad-11",
      iconLabel: "11",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 11",
        shortAddressDescription: "Cañitas, Río Negro",
        data
      },
      url: "unidad-11"
    },
    {
      id: "unidad-12",
      iconLabel: "12",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 12",
        shortAddressDescription: "Cerro Carancho, Rivera",
        data
      },
      url: "unidad-12"
    },
    {
      id: "unidad-13",
      iconLabel: "13",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 13",
        shortAddressDescription: "Paraje Las Rosas, Maldonado",
        data
      },
      url: "unidad-13"
    },
    {
      id: "unidad-14",
      iconLabel: "14",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 14",
        shortAddressDescription: "Piedra de los Indios, Colonia",
        data
      },
      url: "unidad-14"
    },
    {
      id: "unidad-15",
      iconLabel: "15",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 15",
        shortAddressDescription: "Melo, Cerro Largo",
        data
      },
      url: "unidad-15"
    },
    {
      id: "unidad-16",
      iconLabel: "16",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 16",
        shortAddressDescription: "Paysandú",
        data
      },
      url: "unidad-16"
    },
    {
      id: "unidad-17",
      iconLabel: "17",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 17",
        shortAddressDescription: "Campanero, Lavalleja",
        data
      },
      url: "unidad-17"
    },
    {
      id: "unidad-18",
      iconLabel: "18",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 18",
        shortAddressDescription: "Durazno",
        data
      },
      url: "unidad-18"
    },
    {
      id: "unidad-19",
      iconLabel: "19",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 19",
        shortAddressDescription: "Florida",
        data
      },
      url: "unidad-19"
    },
    {
      id: "unidad-20",
      iconLabel: "20",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 20",
        shortAddressDescription: "Salto, Salto",
        data
      },
      url: "unidad-20"
    },
    {
      id: "unidad-21",
      iconLabel: "21",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 21",
        shortAddressDescription: "Paraje Pintado Grande, Artigas",
        data
      },
      url: "unidad-21"
    },
    {
      id: "unidad-22",
      iconLabel: "22",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 22",
        shortAddressDescription: "Rocha",
        data
      },
      url: "unidad-22"
    },
    {
      id: "unidad-23",
      iconLabel: "23",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 23",
        shortAddressDescription: "Chacra Treinta y Tres, Treinta y Tres",
        data
      },
      url: "unidad-23"
    },
    {
      id: "unidad-24",
      iconLabel: "24",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 24",
        shortAddressDescription: "Ruta 2 Km. 278.000, Pense, Soriano Soriano",
        data
      },
      url: "unidad-24"
    },
    {
      id: "unidad-25",
      iconLabel: "25",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 25",
        shortAddressDescription: "Máxima Seguridad, Santiago Vazquez, Montevideo",
        data
      },
      url: "unidad-25"
    },
    {
      id: "unidad-26",
      iconLabel: "26",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 26",
        shortAddressDescription: "Tacuarembó",
        data
      },
      url: "unidad-26"
    }
  ] satisfies ContentDefinition[];
  return items;
}
