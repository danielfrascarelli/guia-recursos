import styles from "./Traslados.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { RelativeType } from "../../../../shared/utils/RelativeType";
import type { DefinitionProps } from "../../../../components/DefinitionProps";

export interface TrasladosProps extends DefinitionProps {
  type: RelativeType;
};

export default function Traslados({ type }: TrasladosProps) {
  const items = getContentDefinition(type).map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <TitleBar title={"Traslados"} />
      <main className={styles.main}>
        <TextListOptions items={items} />
      </main>
    </div>
  );
}
