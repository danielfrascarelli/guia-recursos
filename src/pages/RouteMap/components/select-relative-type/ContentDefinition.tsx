 
import adulto from "/src/assets/images/adulto.png";
import adolescente from "/src/assets/images/adolescente.png"; 
import type { ContentDefinition } from "../../../../components/ItemDefinition";
import { RelativeType } from "../../../../shared/utils/RelativeType";

export function getContentDefinition(): ContentDefinition[] {
  const items = [{
    id: "1",
    variant: "pretty_white",
    url: "../adulto",
    imageUrl: adulto,
    componentType: "TypePersonComponent",
    props: {
      title: "Adulto",
      type: RelativeType.Adult,
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
      type: RelativeType.Teenager,
    }
  }
  ] satisfies ContentDefinition[];
  return items;
}
