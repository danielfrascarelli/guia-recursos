import type { ContentDefinition } from "../../components/ItemDefinition";

 
export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "primeros-momentos",
      componentType: "EarlyMomentsComponent",
      props: {
        title: "Primeros momentos de la detencion",
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "seleccionar-familiar",
      componentType: "SelectRelativeTypeComponent",
      props: {
        title: "Mapa de ruta luego de la detención",
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "proceso-judicial",
      componentType: "JudicialProcessComponent",
      props: {
        title: "Proceso Judicial",
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "contactos-utiles",
      componentType: "ContactosUtilesComponent",
      props: {
        title: "Contactos útiles",
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
