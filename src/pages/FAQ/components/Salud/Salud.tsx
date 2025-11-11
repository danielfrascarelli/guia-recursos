import styles from "./Salud.module.scss";
import { TextListOptions } from "../../../../components/list-options/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import { RelativeType } from "../../../../shared/utils/RelativeType";
import IntroTeenager from "./IntroTeenager";
import BackButton from "../../../../components/back-button/BackButton";

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
      <main className={styles.main}>
        {
          type == RelativeType.Adult
            ? <></>
            : <IntroTeenager />
        }
        <TextListOptions items={items} />
      </main>
    </div>
  );
}
