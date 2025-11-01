// import "./styles.css"
// import styles from "./TitleBar.module.scss";

import LayoutTitleBar from "../../layouts/layout-title-bar copy/LayoutTitleBar";

type TitleBarProps = {
  title: string;
  rightIcon?: string;
};

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <LayoutTitleBar title={title} />
    // <div className={styles.sticky}>
    //   <div className={`${styles.fpTopbar2Container} `} >
    //     <div className={`${styles.stickyInner} fp-topbar-2`}>
    //       <h1 className={`${styles.title} fp-title`}>{title}</h1>
    //     </div>
    //   </div>
    // </div>
  );
}
