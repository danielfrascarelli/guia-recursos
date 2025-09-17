import "./styles.scss"

type TitleBarProps = {
  title: string;
  rightIcon?: string;
};

export default function LayoutTitleBar({ title }: TitleBarProps) {
  return (
    <div className="fp-layout-topbar-2-container">
      <div className="fp-layout-topbar-2">
        <h1 className="fp-layout-title">{title}</h1>
      </div>
    </div>
  );
}
