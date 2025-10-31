import type { ContentDefinition } from "../../../../../components/ItemDefinition";


export const data = {
  shortName: "name of the office2",
  longName: "name of the office2",
  department: "Montevideo",
  city: "Montevideo",
  neighborhood: "Punta de Rieles",
  address: {
    text: "Camino Dionisos 6350 esquina Chacarita de los Padres",
    url: "oficinas/https://maps.google.com/?q=Camino+Dionisos+6350,+Montevideo"
  },
  phone: [
    { area: "Sub–dirección administrativa", phones: ["4340 2628 int 17"] },
    { area: "Sub–dirección operativa", phones: ["2030 9510"] },
    { area: "Sub–dirección técnica", phones: ["2030 9510 / 4340 3308"] }
  ],
  email: [
    { area: "Sub–dirección administrativa", emails: ["inr-u-9.secretaria@minterior.gub.uy"] },
    { area: "Sub–dirección operativa", emails: ["inr-u-9.operativa@minterior.gub.uy"] },
    { area: "Sub–dirección técnica", emails: ["inr-u-9.tecnica@minterior.gub.uy"] }
  ],
  openingHours: "Lunes a viernes de 8 am a 5 pm"
  // paquetes: {
  //   horarioEntrega: "dentro del horario de visita.",
  //   restriccionesArticulosUrl: "oficinas/#" // poné la URL real de “click aquí” si la tenés
  // },
  // visitas: {
  //   horario: "8 hs a 15 hs (los días dependen del sector)",
  //   restriccionesVestimentaUrl: "oficinas/#", // poné la URL real de “click aquí”
  //   restriccionesTexto: [
  //     "La misma debe estar registrada, previa solicitud de la persona solicitando que sea ingresada.",
  //     "Recibe un máximo de 4 visitantes, incluidos menores.",
  //     "El ingreso de menores cuando es traído por la mamá deberá acompañarse de venir de cédula de identidad; cuando ingresa con otro mayor, debe ser por solicitud especial, partida de nacimiento y consentimiento de la madre o tutor.",
  //     "También tendrá restricciones para el ingreso a la visita toda aquella visita que tenga un impedimento judicial, o se encuentre sancionada."
  //   ]
  // }
};

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "office-1",
      iconLabel: "1",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Atención a la Familia de Personas Privadas de Libertad",
        data
      },
      url: "oficinas/1"
    }
    , {
      id: "office-2",
      iconLabel: "2",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Junta Nacional de Traslados",
        data
      },
      url: "oficinas/2"
    },
    {
      id: "office-3",
      iconLabel: "3",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Sub-Dirección Técnica Nacional",
        data
      },
      url: "oficinas/3"
    }, {
      id: "office-4",
      iconLabel: "4",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Centro de Ingreso, Diagnóstico y Derivación (CIDD)",
        data
      },
      url: "oficinas/4"
    },
    {
      id: "office-5",
      iconLabel: "5",
      variant: "pretty_white",
      componentType: "InrOfficeComponent",
      props: {
        title: "Departamento de Género y Diversidad",
        data
      },
      url: "oficinas/5"
    }
  ] satisfies ContentDefinition[];
  return items;
}
