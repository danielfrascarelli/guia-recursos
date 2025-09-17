import "./BackButton.scss"

type BackButtonProps = {
  label?: string;
  onBack?: () => void;
  className?: string;
};

export default function BackButton({ label, onBack, className }: BackButtonProps) {
  return (
    <div className={`topbar-back-button-container ${className ?? ""}`} onClick={onBack}>
      <button
        className={`fp-topbar-back-button ps-1 `}
        onClick={onBack}
      >
        <i className="bi bi-arrow-left-short fs-6 " aria-hidden="true" />
        <span className="fp-topbar-back-span" >{label}</span>
      </button>
    </div>
  );
}
