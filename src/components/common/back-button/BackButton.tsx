import { Button } from "react-bootstrap";

import "./BackButton.module.scss"

type BackButtonProps = {
  label?: string;
  onBack?: () => void;
  className?: string;
};

export default function BackButton({ label  , onBack, className }: BackButtonProps) {
  return (
    <Button
      variant="link"
      className={`fp-back-btn ps-0 ${className ?? ""}`}
      onClick={onBack}
    >
      <i className="bi bi-arrow-left-short fs-4" aria-hidden="true" />
      <span>{label}</span>
    </Button>
  );
}
