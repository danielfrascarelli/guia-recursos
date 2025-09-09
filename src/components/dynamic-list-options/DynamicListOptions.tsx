// import React from "react";

// import styles from "./DynamicListOptions.module.scss";
// // import type { DynamicListOptionsProps } from "./DynamicListOptionsProps";
// import { SectionButton } from "../section-button/SectionButton";

// export const DynamicListOptions: React.FC<DynamicListOptionsProps> = ({ items, onClick }) => {
//   return (
//     <nav className={styles.list} aria-label="Categorías de preguntas frecuentes">
//       {items.map((item) => (
//         <SectionButton
//           key={item.id}
//           icon={item.icon}
//           label={item.title}
//           showRight
//           variant={item.variant}
//           onClick={() => onClick && item.url && onClick(item.url)}
//         />
//       ))}
//     </nav>
//   );
// };
