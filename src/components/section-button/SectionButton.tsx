import React from "react";

import type { SectionButtonProps } from "./SectionButtonProps";

import "./section-button.scss";
import { toBsBtnVars, type PaletteSpec } from "../../shared/utils/Palete";


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
  white: {
    text: "var(--brand-dark)",
    bg: "var(--brand-white)",
    border: "var(--brand-dark)",
    hoverText: "var(--brand-dark)",
    hoverBg: "var(--brand-accent-700)",
    hoverBorder: "var(--brand-accent-700)",
    focusRgb: "241,165,70"
  },
  pretty_white: {
    text: "var(--brand-green-live)",
    bg: "var(--brand-white)",
    border: "none",
    hoverText: "var(--brand-dark)",
    hoverBg: "var(--brand-accent-700)",
    hoverBorder: "var(--brand-accent-700)",
    focusRgb: "241,165,70",
    shadow: "7px 11px 11px #80808045"


    // /* Espaciado lateral exacto */
    // --bs-btn-padding-x: 19px;
    // /* (podés tocar también Y si querés) */
    // /* --bs-btn-padding-y: .5rem; */

    // /* Sombra personalizada */
    // box-shadow: 7px 11px 11px #80808045;

    // /* Por si tu build no aplica los colores de las vars en el runtime */
    // color: var(--bs-btn-color);
    // background-color: var(--bs-btn-bg);
    // border: none; 
  },
} as const satisfies Record<string, PaletteSpec>;;

export const SectionButton: React.FC<SectionButtonProps> = ({
  label,
  icon,
  iconLabel,
  variant = "green",
  showRight = true,
  showLeftIcon = true,
  onClick,
  gap,
  style
}) => {
  // gap visual entre icono y texto (default ~12px)
  const gapValue = typeof gap === "number" ? `${gap}px` : gap ?? "12px";

  const palette = palettes[variant];
  const bsVars = toBsBtnVars(palette, {
    paddingX: "19px",
    paddingY: ".6rem",
  });

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="btn btn-brand-shadow w-100 py-3 px-3 rounded-4 d-flex align-items-center"
      style={{
        ...bsVars,
        ...style,
      }}
    >
      {!icon && showLeftIcon && (
        <span className="sb-badge flex-shrink-0" aria-hidden="true"
        >
          {/* <label className="showLeftIcon">?</label> */}
          {iconLabel ?? "?"}
        </span>
      )}
      <div className="d-flex align-items-center" style={{ gap: gapValue }}>
        {icon && (
          <span className="d-inline-grid fp-icon" style={{ placeItems: "center" }} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="text-start flex-grow-1 sb-text ">{label}</span>
      </div>

      {showRight && (
        // <div className="d-flex">
        <i className="bi bi-arrow-right-short fs-3  flex-shrink-0" aria-hidden="true" />
      // </div>
      )
      }
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
