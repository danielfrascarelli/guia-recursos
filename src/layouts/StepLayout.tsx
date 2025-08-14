import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import BackButton from "../components/back-button/BackButton";
import TitleBar from "../components/title-bar/TitleBar";

import "../styles/layout.scss";

type StepLayoutProps = {
  titleText: string;
  titleShow?: boolean
  backButtonText?: string;
  backButtonShow?: boolean
  showNextButton?: boolean;
  onBack?: () => void;
  onNext?: () => void;
};

export default function StepLayout({
  titleText,
  titleShow = true,
  backButtonText = "Volver",
  backButtonShow = true,
  showNextButton = true,
  onBack,
  onNext,
}: StepLayoutProps) {
  return (
    <Container fluid className="step-layout p-0">
      {/* Header sticky */}
      <div className="fp-intro-sticky">
        {titleShow && <div className="fp-topbar-1">
          <BackButton onBack={onBack} label={backButtonText} />
        </div>
        }
        {backButtonShow && <TitleBar title={titleText} />}
      </div>

      {/* Contenido de la página */}
      <div className="fp-intro-content">
        <Outlet />
      </div>

      {/* CTA inferior */}
      {showNextButton && (
        <div className="fp-intro-cta-wrap">
          <button className="fp-intro-cta" onClick={onNext}>
            Siguiente <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </Container>
  );
}
