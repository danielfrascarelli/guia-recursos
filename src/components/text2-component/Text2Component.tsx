import React from "react";
import { Container } from "react-bootstrap";

import type { Text2ComponentProps } from "./Text2ComponentProps";
import styles from "./Text2Component.module.scss";

export const Text2Component: React.FC<Text2ComponentProps> = ({
  title,
  text,
  title2,
  text2
}) => {
  return (

    <div className={styles.screen}>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.title}>{title2}</h1>
        <Container fluid className="p-0">
          <p>
            {text}
          </p>
          <p>
            {text2}
          </p>
        </Container>
      </main>
    </div>
  );
};
