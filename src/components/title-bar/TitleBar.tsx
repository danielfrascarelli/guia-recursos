import "./styles.css"
import styles from "./TitleBar.module.scss";

type TitleBarProps = {
  title: string;
  rightIcon?: string;
};

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <div className={styles.sticky}>
      <div className={`${styles.fpTopbar2Container} `} >
        <div className={`${styles.stickyInner} fp-topbar-2`}>
          <h1 className={`${styles.title} fp-title`}>{title}</h1>
        </div>
      </div>
    </div>
  );
}
