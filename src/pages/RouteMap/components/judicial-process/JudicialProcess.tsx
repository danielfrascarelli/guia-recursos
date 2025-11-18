import styles from "./JudicialProcess.module.scss";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import Intro from "./Intro";
import BackButton from "../../../../components/back-button/BackButton";
import { ImageListOptions } from "../../../../components/list-options/image-list-options/ImageListOptions";

export interface JudicialProcessProps extends DefinitionProps {
};

export default function JudicialProcess() {

  const items = getContentDefinition().map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Proceso judicial"} />
      </div>
      <main className={`${styles.main} mt-4`}>
        <Intro />
        <div className={`${styles.list} d-block common-layout-margin-only-desktop gap-3`}>
          <ImageListOptions items={items} />
        </div>
      </main>
    </div>
  );
}
