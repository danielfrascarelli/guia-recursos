import "./styles.css"
import styles from "./TitleBar.module.scss";

type TitleBarProps = {
  title: string;
  rightIcon?: string;
};

export default function TitleBar({ title, rightIcon = "bi-person" }: TitleBarProps) {
  return (
      <div className={styles.sticky}>
          <div className={`${styles.stickyInner} fp-topbar-2`}>
            <h1 className={`${styles.title} fp-title`}>{title}</h1>
            <i className={`bi ${rightIcon} fs-4`} aria-hidden="true" />
          </div>
        </div>  
  );
}
