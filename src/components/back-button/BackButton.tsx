import { useLocation } from "react-router-dom";

import "./BackButton.scss"

type BackButtonProps = {
  label?: string;
  onBack?: () => void;
  className?: string;
};

export default function BackButton({ label, onBack, className }: BackButtonProps) {
  const location = useLocation();

  const onShare = () => {
    const msg = `Hola 👋, entrá al siguiente link para ver la Guía para el acompañamiento: https://gr.face-auth.me${location.pathname}`;
    const url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  };

  return (
    <div className={`topbar-back-button-container ${className ?? ""}`}>
      <button className={`fp-topbar-back-button ps-1 `} onClick={onBack}      >
        <i className="bi bi-arrow-left-short fs-6 " aria-hidden="true" />
        <span className="fp-topbar-back-span" >{label}</span>
      </button>
      <button className={`fp-topbar-back-button ps-1 `} onClick={onShare}>
        <span className="fp-topbar-back-span" >
          <i className="bi bi-share fs-6 " aria-hidden="true" />
        </span>
      </button>
    </div>
  );
} 