import { Button } from "react-bootstrap";

import "./BackButton.scss"

type BackButtonProps = {
  label?: string;
  onBack?: () => void;
  className?: string;
};

export default function BackButton({ label, onBack, className }: BackButtonProps) {
  return (
    <div className={`topbar-back-button-container ${className ?? ""}`} onClick={onBack}>
      <Button
        variant="link"
        className={`fp-topbar-back-button ps-0 `}
        onClick={onBack}
      >
        <i className="bi bi-arrow-left-short fs-4" aria-hidden="true" />
        <span>{label}</span>
      </Button>
    </div>
  );
}
