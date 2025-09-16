import type { ContentDefinition } from "../../../../../components/ItemDefinition";


export function getAdultContentDefinition(): ContentDefinition[] {

  const adulto = [
    {
      id: "1",
      variant: "orange",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "¿Cuánto tiempo transcurre desde la detención hasta la realización de la primer audiencia?",
        text: `
Existe un máximo de tiempo de permanencia en la seccional policial la cual  no debe de exceder las cuatro horas, luego debe tomar contacto con FISCALÍA.
Para ver al juez, existe un tiempo de espera de hasta 24 hs.
`
      },
    },
    {
      id: "2",
      variant: "green",
      url: "2",
      componentType: "TextComponent",
      props: {
        title: "Es importante conocer la tipificación del delito (causa) de tu familiar:",
        text:
          `
Los/as defensores/as necesitan la colaboración de las familias durante el proceso, por eso es importante que estés en los primeros momentos de la detención. 
Podes acercarte a hablar con el/la defensor/a para tener mayor información y así saber como ayudar y acompañar. 

En MOntevideo y zonas metropolitanas esto sucede en la OPEC (falta definir la sigla)
En el interior del Pais, debes de concurrir a Defensoría. 

Globito: Sugerimos que te comuniques con el abogado/a defensor/a.

`
      },
    }
  ] satisfies ContentDefinition[];
  return adulto;
}
