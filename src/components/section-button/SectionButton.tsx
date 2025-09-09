// // src/components/section-button/SectionButton.tsx
// import React from "react";

// export function SectionButton({
//   label,
//   icon,
//   variant = "success", // success (verde) o warning (naranja)
//   showRight = true,
//   onClick,
// }: {
//   label: string;
//   icon?: React.ReactNode;
//   variant?: "success" | "warning";
//   showRight?: boolean;
//   onClick?: () => void;
// }) {
//   const btnClass = `btn btn-${variant} w-100 py-3 px-3 rounded-4 d-flex align-items-center justify-content-between`;
//   return (
//     <button className={btnClass} onClick={onClick} type="button">
//       <span className="d-flex align-items-center gap-3">
//         {icon && <span className="d-inline-grid place-items-center fs-5">{icon}</span>}
//         <span className="fw-semibold text-start">{label}</span>
//       </span>
//       {showRight && <i className="bi bi-arrow-right fs-5" aria-hidden="true" />}
//     </button>
//   );
// }



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
