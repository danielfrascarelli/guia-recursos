import styles from "./Traslados.module.scss";
import { TextListOptions } from "../../../../components/list-options/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import { RelativeType } from "../../../../shared/utils/RelativeType";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import IntroTeenager from "./IntroTeenager";
import BackButton from "../../../../components/back-button/BackButton";

export interface TrasladosProps extends DefinitionProps {
  type: RelativeType;
};

export default function Traslados({ type }: TrasladosProps) {
  const items = getContentDefinition(type).map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Traslados"} />
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
