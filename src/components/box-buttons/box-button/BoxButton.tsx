import React from "react";

import type { BoxButtonProps } from "./BoxButtonProps";

import './box.scss'

export const BoxButton: React.FC<BoxButtonProps> = ({
  title ,
  subtitle,
  icon,
  imageUrl,
  variant = "green",
  onClick,
  style
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={title}
      className={`fp-btn fp-btn-${variant} rounded-4 p-2 p-md-3 p-lg-4 d-flex flex-column align-items-center`}
      style={style}>
      {icon && (
        <div className="d-flex justify-content-center mb-2 mb-md-3 ">
          {icon}
        </div>
      )}
      {!icon && imageUrl && (
        <div className="d-flex justify-content-center mb-2 mb-md-3 ">
          <img src={imageUrl} className="box-image" alt={`${title} logo`} />
        </div>
      )}
      <div className="text-center text-title-box-font-size flex-grow-1 d-flex align-items-center">
        {title}
      </div>
      <div className="text-center text-subtitle-box-font-size mt-1 flex-grow-1 d-flex align-items-center">
        {subtitle}
      </div>
    </button>
  );
};










// export const BoxButton: React.FC<BoxButtonProps> = ({  label,  icon,  variant = "green",  showRight,  onClick,  gap,}) => {
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
