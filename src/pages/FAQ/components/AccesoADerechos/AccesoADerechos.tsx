import styles from "./AccesoADerechos.module.scss";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import type { RelativeType } from "../../../../shared/utils/RelativeType";
import BackButton from "../../../../components/back-button/BackButton";
import { ImageListOptions } from "../../../../components/list-options/image-list-options/ImageListOptions";

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
      <main className={`${styles.main} mt-4`}>
        <div className="d-block common-layout-margin-only-desktop gap-3">
          <ImageListOptions items={items} />
        </div>
      </main>
    </div>
  );
}
