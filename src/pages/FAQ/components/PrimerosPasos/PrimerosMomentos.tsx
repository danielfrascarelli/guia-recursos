import { useNavigate } from "react-router-dom";

import styles from "./PrimerosMomentos.module.scss";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { Items } from "./Items";


export default function PrimerosMomentos() {
  const navigate = useNavigate();

  return (
    <div className={styles.screen}>
      <main className={styles.main}>
        <h1 className={styles.title}>Primeros momentos de la detención</h1>
        <TextListOptions items={Items} onClick={(url: string) => navigate(url)} />
      </main>
    </div>
  );
} 
