import styles from "./VisitasYContacto.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import type { RelativeType } from "../../../../shared/utils/RelativeType";

export interface VisitasYContactoProps extends DefinitionProps {
  type: RelativeType;
};

export default function VisitasYContacto({type}:VisitasYContactoProps) {

  const items = getContentDefinition(type).map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <TitleBar title={"Visitas y contacto"} />
      <main className={styles.main}>
        <TextListOptions items={items}  />
      </main>
    </div>
  );
}
