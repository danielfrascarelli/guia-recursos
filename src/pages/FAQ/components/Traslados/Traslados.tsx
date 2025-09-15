import styles from "./Traslados.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";

export default function Traslados() {
  const items = getContentDefinition().map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className={styles.screen}>
      <TitleBar title={"Traslados"} />
      <main className={styles.main}>
        <TextListOptions items={items} />
      </main>
    </div>
  );
}
