import styles from "./FAQ.module.scss";
import { TextListOptions } from "../../components/text-list-options/TextListOptions";
import { ItemsFAQ } from "./ItemsFAQ";

export default function FAQ() {
  return (
    <div className={styles.screen}>
      <main className={styles.main}>
        <h1 className={styles.title}>Preguntas frecuentes</h1>
        <TextListOptions items={ItemsFAQ} />
      </main>
    </div>
  );
}
