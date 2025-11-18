import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ImageListOptions.module.scss";
import type { ImageListOptionsProps } from "./ImageListOptionsProps";
import ImageBoxButton from "../../box-buttons/image-box-button/ImageBoxButton";

export const ImageListOptions: React.FC<ImageListOptionsProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.list} aria-label="Categorías de preguntas frecuentes">
      {items.map((item) => (
        <ImageBoxButton
          key={item.id}
          onClick={() => item.url && navigate(item.url)}
          srcImg={item.imageUrl ?? ""}
          label={item.title}
        />
      ))}
    </nav>
  );
};
