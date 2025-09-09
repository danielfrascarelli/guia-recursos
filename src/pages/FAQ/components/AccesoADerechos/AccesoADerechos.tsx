import { useNavigate } from "react-router-dom";

import styles from "./AccesoADerechos.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";

export default function AccesoADerechos() {
  const navigate = useNavigate();

  const items = getContentDefinition().map(i => ({ title: i.props.title, ...i }));

  return (
    <div className={styles.screen}>
      <main className={styles.main}>
        <h1 className={styles.title}>Acceso a derechos y actividades</h1>
        <TextListOptions items={items} onClick={(url: string) => navigate(url)} />
      </main>
    </div>
  );
}
