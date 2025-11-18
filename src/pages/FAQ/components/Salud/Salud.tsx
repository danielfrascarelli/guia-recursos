import styles from "./Salud.module.scss";
import { TextListOptions } from "../../../../components/list-options/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import { RelativeType } from "../../../../shared/utils/RelativeType";
import IntroTeenager from "./IntroTeenager";
import BackButton from "../../../../components/back-button/BackButton";
import { ImageListOptions } from "../../../../components/list-options/image-list-options/ImageListOptions";

export interface SaludProps extends DefinitionProps {
  type: RelativeType;
};
export default function Salud({ type }: SaludProps) {

  const items = getContentDefinition(type).map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Salud"} />
      </div>
      <main className={`${styles.main} mt-4`}>
        {
          type == RelativeType.Adult
            ? <></>
            : <IntroTeenager />
        }
        <div className="d-block common-layout-margin-only-desktop gap-3">
          <ImageListOptions items={items} />
        </div>
      </main>
    </div>
  );
}
