import React from "react";
import { Container } from "react-bootstrap";

import type { TextComponentProps } from "./TextComponentProps";
import styles from "./TextComponent.module.scss";

export const TextComponent: React.FC<TextComponentProps> = ({
  title,
  text
}) => {
  return (

    <div className={styles.screen}>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <Container fluid className="p-0">
          <p>
            {text}
          </p>
        </Container>
      </main>
    </div>
  );
};
