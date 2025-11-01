import type { ContentDefinition } from "../../../../components/ItemDefinition";
import { RelativeType } from "../../../../shared/utils/RelativeType";

import adult from '../../../../assets/images/people/adult.png';
import teenager from '../../../../assets/images/people/teenager.png';

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "../adolescente",
      imageUrl: teenager,
      componentType: "TypePersonComponent",
      props: {
        title: "Adolescente",
        type: RelativeType.Teenager

      }
    }, {
      id: "2",
      variant: "pretty_white",
      url: "../adulto",
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
