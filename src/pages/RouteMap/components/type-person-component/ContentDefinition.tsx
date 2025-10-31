import type { ContentDefinition } from "../../../../components/ItemDefinition";
import { RelativeType } from "../../../../shared/utils/RelativeType";
// import { getAdultContentDefinition } from "./types/AdultContentDefinition";
// import { getTeenagerContentDefinition } from "./types/TeenagerContentDefinition";

export function getContentDefinition(type: RelativeType): ContentDefinition[] { 
  console.log(type);
  return []; // type ==RelativeType.Adult ? getAdultContentDefinition() : getTeenagerContentDefinition();
}
