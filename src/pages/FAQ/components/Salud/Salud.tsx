import styles from "./Salud.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";

export default function Salud() {

  const items = getContentDefinition().map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

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
