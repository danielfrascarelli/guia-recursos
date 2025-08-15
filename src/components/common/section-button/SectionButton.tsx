import React from "react";
import styles from "./SectionButton.module.scss";

type Props = {
  label: string;
  icon: React.ReactNode;
  variant?: "green" | "orange";
  onClick?: () => void;
};

export const SectionButton: React.FC<Props> = ({
  label,
  icon,
  variant = "green",
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${styles.item} ${styles[variant]}`}
      onClick={onClick}
      aria-label={label}
    >
      <span className={styles.icon} aria-hidden>
        {icon}
      </span>
      <span className={styles.text}>{label}</span>
    </button>
  );
};
