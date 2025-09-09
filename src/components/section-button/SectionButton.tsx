import React from "react";

import type { SectionButtonProps } from "./SectionButtonProps";
import styles from "./SectionButton.module.scss";

export const SectionButton: React.FC<SectionButtonProps> = ({
  label,
  icon,
  variant = "green",
  showRight,
  onClick,
  gap,
}) => {
  const gapValue = typeof gap === "number" ? `${gap}px` : gap;

  return (
    <button
      type="button"
      className={`${styles.item} ${styles[variant]}`}
      onClick={onClick}
      aria-label={label}
      style={gapValue ? ({ ["--gap" as any]: gapValue } as React.CSSProperties) : undefined}
    >
      <div className={styles.content}>
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}

        <span className={styles.text}>{label}</span>

        {showRight && (
          <span className={styles.arrow} aria-hidden="true">
            <i className="bi bi-arrow-right-short fs-1" />
          </span>
        )}
      </div>
    </button>
  );
};
