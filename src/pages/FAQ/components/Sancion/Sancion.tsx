import type { DefinitionProps } from "../../../../components/DefinitionProps";
import { RelativeType } from "../../../../shared/utils/RelativeType"; 
import AdultSancion from "./AdultSancion/AdultSancion";
import TeenagerSancion from "./TeenagerSancion/TeenagerSancion";

export interface SancionProps extends DefinitionProps {
  type: RelativeType;
};
export default function Sancion({ type }: SancionProps) {

  return (
    <>
      {
        type == RelativeType.Adult
          ? <AdultSancion />
          : <TeenagerSancion />
      }
    </>
  );
}
