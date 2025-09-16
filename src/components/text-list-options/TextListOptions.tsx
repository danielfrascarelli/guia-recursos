import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./TextListOptions.module.scss";
import type { TextListOptionsProps } from "./TextListOptionsProps";
import { SectionButton } from "../section-button/SectionButton";

export const TextListOptions: React.FC<TextListOptionsProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.list} aria-label="Categorías de preguntas frecuentes">
      {items.map((item) => (
        <SectionButton
          key={item.id}
          icon={item.icon}
          iconLabel={item.iconLabel}
          label={item.title}
          showRight
          variant={item.variant}
          onClick={() => item.url && navigate(item.url)}
        />
      ))}
    </nav>
  );
};
