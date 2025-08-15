import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import BackButton from "../components/common/back-button/BackButton";
import TitleBar from "../components/common/title-bar/TitleBar";

import "../styles/layout.scss";

type StepLayoutProps = {
  titleText?: string;
  titleShow?: boolean
  backButtonText?: string;
  backButtonShow?: boolean
  showNextButton?: boolean;
  backRoute?: string;
  nextRoute?: string;
};

export default function StepLayout({
  titleText,
  titleShow = true,
  backButtonText = "Volver",
  backButtonShow = true,
  showNextButton = true,
  backRoute,
  nextRoute,
}: StepLayoutProps) {
  const navigate = useNavigate();

  return (
    <Container fluid className="step-layout p-0">
      {/* Header sticky */}
      <div className="fp-intro-sticky">
        {backButtonShow && backRoute && <div className="fp-topbar-1">
          <BackButton onBack={() => navigate(backRoute)} label={backButtonText} />
        </div>
        }
        {titleShow && titleText && <TitleBar title={titleText} />}
      </div>

      {/* Contenido de la página */}
      <div className="fp-intro-content">
        <Outlet />
      </div>

      {/* CTA inferior */}
      {showNextButton && nextRoute && (
        <div className="fp-intro-cta-wrap">
          <button className="fp-intro-cta" onClick={() => navigate(nextRoute)}>
            Siguiente <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </Container>
  );
}
