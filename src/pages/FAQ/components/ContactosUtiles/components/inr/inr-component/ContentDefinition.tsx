import type { ContentDefinition } from "../../../../../../../components/ItemDefinition";

export const data = {
  departamento: "Montevideo",
  ciudad: "Montevideo",
  barrio: "Punta de Rieles",
  direccion: {
    texto: "Camino Dionisos 6350 esquina Chacarita de los Padres",
    url: "https://maps.google.com/?q=Camino+Dionisos+6350,+Montevideo"
  },
  telefonos: [
    { area: "Sub–dirección administrativa", numeros: "4340 2628 int 17" },
    { area: "Sub–dirección operativa", numeros: "2030 9510" },
    { area: "Sub–dirección técnica", numeros: "2030 9510 / 4340 3308" }
  ],
  correos: [
    { area: "Sub–dirección administrativa", email: "inr-u-9.secretaria@minterior.gub.uy" },
    { area: "Sub–dirección operativa", email: "inr-u-9.operativa@minterior.gub.uy" },
    { area: "Sub–dirección técnica", email: "inr-u-9.tecnica@minterior.gub.uy" }
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
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 1 - Punta de Rieles, Montevideo",
        data
      },
      url: "unidad-1"
    }
    , {
      id: "unidad-2",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 2 - Chacra de Libertad, San José",
        data
      },
      url: "unidad-2"
    },
    {
      id: "unidad-3",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 3 - Penal de Libertad, San José ",
        data
      },
      url: "unidad-3"
    }, {
      id: "unidad-4",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 4 - Santiago Vázquez, Montevideo",
        data
      },
      url: "unidad-4"
    },
    {
      id: "unidad-5",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 5 - CMRF, Montevideo",
        data
      },
      url: "unidad-5"
    },
    {
      id: "unidad-6",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 6 - Punta de Rieles, Montevideo",
        data
      },
      url: "unidad-6"
    },
    {
      id: "unidad-7",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 7 - Chacra Policial, Canelones",
        data
      },
      url: "unidad-7"
    },
    {
      id: "unidad-8",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 8 - Domingo Arena, Montevideo",
        data
      },
      url: "unidad-8"
    },
    {
      id: "unidad-9",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 9 - Montevideo",
        data
      },
      url: "unidad-9"
    },
    {
      id: "unidad-10",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 10 - Soler, San José",
        data
      },
      url: "unidad-10"
    },
    {
      id: "unidad-11",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 11 - Cañitas, Río Negro",
        data
      },
      url: "unidad-11"
    },
    {
      id: "unidad-12",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 12 - Cerro Carancho, Rivera",
        data
      },
      url: "unidad-12"
    },
    {
      id: "unidad-13",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 13 - Paraje Las Rosas, Maldonado",
        data
      },
      url: "unidad-13"
    },
    {
      id: "unidad-14",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 14 - Piedra de los Indios, Colonia",
        data
      },
      url: "unidad-14"
    },
    {
      id: "unidad-15",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 15 - Melo, Cerro Largo",
        data
      },
      url: "unidad-15"
    },
    {
      id: "unidad-16",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 16 - Paysandú",
        data
      },
      url: "unidad-16"
    },
    {
      id: "unidad-17",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 17 - Campanero, Lavalleja",
        data
      },
      url: "unidad-17"
    },
    {
      id: "unidad-18",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 18 - Durazno",
        data
      },
      url: "unidad-18"
    },
    {
      id: "unidad-19",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 19 - Florida",
        data
      },
      url: "unidad-19"
    },
    {
      id: "unidad-20",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 20 - Salto, Salto",
        data
      },
      url: "unidad-20"
    },
    {
      id: "unidad-21",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 21 - Paraje Pintado Grande, Artigas",
        data
      },
      url: "unidad-21"
    },
    {
      id: "unidad-22",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 22 - Rocha",
        data
      },
      url: "unidad-22"
    },
    {
      id: "unidad-23",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 23 - Chacra Treinta y Tres, Treinta y Tres",
        data
      },
      url: "unidad-23"
    },
    {
      id: "unidad-24",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 24 - Ruta 2 Km. 278.000, Pense, Soriano Soriano",
        data
      },
      url: "unidad-24"
    },
    {
      id: "unidad-25",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 25 - Máxima Seguridad, Santiago Vazquez, Montevideo",
        data
      },
      url: "unidad-25"
    },
    {
      id: "unidad-26",
      icon: "",
      variant: "green",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 26 - Tacuarembó, Tacuarembó",
        data
      },
      url: "unidad-26"
    }
  ] satisfies ContentDefinition[];
  return items;
}
