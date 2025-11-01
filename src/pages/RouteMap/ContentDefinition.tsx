import type { ContentDefinition } from "../../components/ItemDefinition";

import esposas from '../../assets/images/esposas.png';
import edificioJusticia from '../../assets/images/edificio-justicia.png';
import martilloJuez from '../../assets/images/martillo-juez.png';
import telefonoVideollamada from '../../assets/images/telefono-videollamada.png';

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "primeros-momentos",
      componentType: "EarlyMomentsComponent",
      props: {
        title: "Primeros momentos de la detencion",
        imageUrl: esposas
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "seleccionar-familiar",
      componentType: "SelectRelativeTypeComponent",
      props: {
        title: "Luego de la detención",
        imageUrl: edificioJusticia
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "proceso-judicial",
      componentType: "JudicialProcessComponent",
      props: {
        title: "Proceso Judicial",
        imageUrl: martilloJuez
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "contactos-utiles",
      componentType: "ContactosUtilesComponent",
      props: {
        title: "Contactos útiles",
        imageUrl: telefonoVideollamada
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
