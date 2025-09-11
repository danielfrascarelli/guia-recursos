import { useNavigate } from "react-router-dom";

import styles from "./ContactosUtiles.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import { BoxListOptions } from "../../../../components/box-list-options/BoxListOptions";

export default function ContactosUtiles() {

  const items = getContentDefinition().map(i => ({
    title: i.props.title,
    icon: i.props.icon,
    imageUrl: i.props.imageUrl,
    ...i
  }));

  return (
    <div className={styles.screen}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contactos útiles</h1>
        <div className="d-block d-sm-none">
          <TextListOptions items={items} />
        </div>
        <div className="d-none d-sm-block">
          <BoxListOptions items={items} variant="contacts" />
        </div>
      </main>
    </div>
  );
}
