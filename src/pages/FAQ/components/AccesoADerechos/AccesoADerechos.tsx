import styles from "./AccesoADerechos.module.scss";
import { TextListOptions } from "../../../../components/list-options/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import type { RelativeType } from "../../../../shared/utils/RelativeType";
import BackButton from "../../../../components/back-button/BackButton";

export interface AccesoADerechosProps extends DefinitionProps {
  type: RelativeType;
};
export default function AccesoADerechos({ type }: AccesoADerechosProps) {

  const items = getContentDefinition(type).map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Acceso a derechos y actividades"} />
      </div>
      <main className={styles.main}>
        <TextListOptions items={items} />
      </main>
    </div>
  );
}
