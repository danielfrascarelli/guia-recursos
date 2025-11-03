import type { ContentDefinition } from "../../../../components/ItemDefinition";
import { RelativeType } from "../../../../shared/utils/RelativeType";

import adult from '../../../../assets/images/people/adult.svg';
import teenager from '../../../../assets/images/people/teenager.svg';

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "/mapa-de-ruta/adolescente",
      imageUrl: teenager,
      componentType: "TypePersonComponent",
      props: {
        title: "Adolescente",
        type: RelativeType.Teenager

      }
    }, {
      id: "2",
      variant: "pretty_white",
      url: "/mapa-de-ruta/adulto",
      imageUrl: adult,
      componentType: "TypePersonComponent",
      props: {
        title: "Adulto",
        type: RelativeType.Adult
      },
    },
  ] satisfies ContentDefinition[];
  return items;
}
