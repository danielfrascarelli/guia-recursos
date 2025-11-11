import React from "react";

import type { TextComponentProps } from "./TextComponentProps";
import styles from "./TextComponent.module.scss";
import BackButton from "../back-button/BackButton";
import TitleBar from "../title-bar/TitleBar";

export const TextComponent: React.FC<TextComponentProps> = ({
  title,
  text
}) => {
  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={title} />
      </div>
      <main className={styles.main}>
        <div className="mt-3">
          {text}
        </div>
      </main>
    </div>
  );
};
