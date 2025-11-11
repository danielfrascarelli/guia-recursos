import { useNavigate, useLocation } from "react-router-dom";

import getBackUrl from "../../shared/utils/Back";

import "./BackButton.scss"

type BackButtonProps = {
  className?: string;
};

export default function BackButton({ className }: BackButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const onBackHandler = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => {
      navigate(getBackUrl(location.pathname));
    }, 50);
  };

  const onShare = () => {
    const msg = `Hola 👋, entrá al siguiente link para ver la Guía para el acompañamiento: https://gr.face-auth.me${location.pathname}`;
    const url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  };

  return (
      <div className={`topbar-back-button-container d-flex justify-content-between align-items-center ${className ?? ""}`}>
        <button className="fp-topbar-back-button ps-2 d-flex align-items-center gap-1" onClick={onBackHandler}>
          <i className="bi bi-arrow-left-short fs-6" aria-hidden="true"></i>
          <span>Atrás</span>
        </button>

        <button className="fp-topbar-back-button ps-2 d-flex align-items-center  gap-1" onClick={onShare}>
          <span>Compartir</span>
          <i className="bi bi-share fs-6" aria-hidden="true"></i>
        </button>
    </div>

  );
} 