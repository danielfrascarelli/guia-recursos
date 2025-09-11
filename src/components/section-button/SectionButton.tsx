import React from "react";

import type { SectionButtonProps } from "./SectionButtonProps";

import "./section-button.scss";

export const SectionButton: React.FC<SectionButtonProps> = ({
  label,
  icon,
  variant = "green",
  showRight = true,
  onClick,
  gap,
}) => {
  // gap visual entre icono y texto (default ~12px)
  const gapValue = typeof gap === "number" ? `${gap}px` : gap ?? "12px";

  // Paleta por variante (usá tus tokens si ya los tenés en theme.css)
  const palettes = {
    green: {
      text: "var(--brand-white)",
      bg: "var(--brand-sage)",
      border: "var(--brand-sage)",
      hoverText: "var(--brand-white)",
      hoverBg: "color-mix(in srgb, var(--brand-sage) 85%, black)",
      hoverBorder: "color-mix(in srgb, var(--brand-sage) 85%, black)",
      focusRgb: "124,161,146"
    },
    orange: {
      text: "var(--brand-dark)",
      bg: "var(--brand-accent)",
      border: "var(--brand-accent)",
      hoverText: "var(--brand-dark)",
      hoverBg: "var(--brand-accent-700)",
      hoverBorder: "var(--brand-accent-700)",
      focusRgb: "241,165,70"
    },
  } as const;
  const p = palettes[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="btn w-100 py-3 px-3 rounded-4 d-flex align-items-center justify-content-between"
      style={
        {
          // “Skin” del botón: sobreescribimos las CSS vars que Bootstrap lee en .btn
          ["--bs-btn-color" as any]: p.text,
          ["--bs-btn-bg" as any]: p.bg,
          ["--bs-btn-border-color" as any]: p.border,
          ["--bs-btn-hover-color" as any]: p.hoverText,
          ["--bs-btn-hover-bg" as any]: p.hoverBg,
          ["--bs-btn-hover-border-color" as any]: p.hoverBorder,
          ["--bs-btn-focus-shadow-rgb" as any]: p.focusRgb,
        } as React.CSSProperties
      }
    >
      <span className="d-flex align-items-center" style={{ gap: gapValue }}>
        {icon && (
          <span className="d-inline-grid fp-icon" style={{ placeItems: "center" }} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="text-start">{label}</span>
      </span>

      {showRight && <i className="bi bi-arrow-right-short fs-3" aria-hidden="true" />}
    </button>
  );
};










// export const SectionButton: React.FC<SectionButtonProps> = ({  label,  icon,  variant = "green",  showRight,  onClick,  gap,}) => {
//   const gapValue = typeof gap === "number" ? `${gap}px` : gap;

//   return (
//     <button
//       type="button"
//       className={`${styles.item} ${styles[variant]}`}
//       onClick={onClick}
//       aria-label={label}
//       style={gapValue ? ({ ["--gap" as any]: gapValue } as React.CSSProperties) : undefined}
//     >
//       <div className={styles.content}>
//         {icon && (
//           <span className={styles.icon} aria-hidden="true">
//             {icon}
//           </span>
//        )}

//         <span className={styles.text}>{label}</span>

//         {showRight && (
//           <span className={styles.arrow} aria-hidden="true">
//             <i className="bi bi-arrow-right-short fs-1" />
//           </span>
//        )}
//       </div>
//     </button>
//  );
// };
