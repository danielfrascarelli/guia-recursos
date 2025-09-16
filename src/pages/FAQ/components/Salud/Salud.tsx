import styles from "./Salud.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import type { RelativeType } from "../../../../shared/utils/RelativeType";

export interface SaludProps extends DefinitionProps {
  type: RelativeType;
};
export default function Salud({ type }: SaludProps) {

  const items = getContentDefinition(type).map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <TitleBar title={"Salud"} />
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Salud y sanciones</h1> */}
        <TextListOptions items={items} />
      </main>
    </div>
  );
}
