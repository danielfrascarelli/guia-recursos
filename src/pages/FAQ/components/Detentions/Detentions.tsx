import type { DefinitionProps } from "../../../../components/DefinitionProps";
import { RelativeType } from "../../../../shared/utils/RelativeType";
import AdultDetentions from "./AdultDetentions/AdultDetentions";
import TeenagerDetentions from "./TeenagerDetentions/TeenagerDetentions";

export interface DetentionsProps extends DefinitionProps {
  type: RelativeType;
};
export default function Detentions({ type }: DetentionsProps) {

  return (
    <>
      {
        type == RelativeType.Adult
          ? <AdultDetentions />
          : <TeenagerDetentions />
      }
    </>
  );
}
