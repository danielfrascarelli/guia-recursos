
import { TextListOptions } from "../../components/text-list-options/TextListOptions";
import { ItemsFAQ } from "./ItemsFAQ";
import { BoxListOptions } from "../../components/box-list-options/BoxListOptions";

import styles from "./FAQ.module.scss";
import "./faq.scss";

export default function FAQ() {
  return (
    <div className={styles.screen}>
      <main className={styles.main}>
        <h1 className={styles.title}>Preguntas frecuentes</h1>
        <div className="d-block d-sm-none">
          <TextListOptions items={ItemsFAQ} />
        </div>
        <div className="d-none d-sm-block">
          <BoxListOptions items={ItemsFAQ} variant="faq" />
        </div>
      </main>
    </div>
  );
}
