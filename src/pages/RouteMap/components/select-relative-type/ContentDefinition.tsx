import type { ContentDefinition } from "../../../../../../components/ItemDefinition";

import adulto from "/src/assets/images/adulto.png";
import adolescente from "/src/assets/images/adolescente.png"; 

export function getContentDefinition(): ContentDefinition[] {
  const items = [{
    id: "1",
    variant: "pretty_white",
    url: "../adulto",
    imageUrl: adulto,
    componentType: "TypePersonComponent",
    props: {
      title: "Adulto",
      type: "adulto",
    },
  },
  {
    id: "2",
    variant: "pretty_white",
    url: "../adolescente",
    imageUrl: adolescente,
    componentType: "TypePersonComponent",
    props: {
      title: "Adolescente",
      type: "adolescente",
    }
  }
  ] satisfies ContentDefinition[];
  return items;
}
