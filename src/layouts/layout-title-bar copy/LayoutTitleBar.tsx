import "./styles.css"

type TitleBarProps = {
  title: string;
  rightIcon?: string;
};

export default function LayoutTitleBar({ title, rightIcon = "bi-person" }: TitleBarProps) {
  return (
    <div className="fp-topbar-2">
      <h1 className="fp-title">{title}</h1>
      <i className={`bi ${rightIcon} fs-4`} aria-hidden="true" />
    </div>
  );
}
