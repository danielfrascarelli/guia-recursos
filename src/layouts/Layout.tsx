import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useNavigate,useLocation } from "react-router-dom";

import BackButton from "../components/back-button/BackButton";
import TitleBar from "../components/title-bar/TitleBar";

import "../styles/layout.scss";
import getBackUrl from "../shared/utils/Back";

type StepLayoutProps = {
  titleText?: string;
  titleShow?: boolean
  backButtonText?: string;
  backButtonShow?: boolean
  showNextButton?: boolean;
  // backRoute?: string | ;
  nextRoute?: string;
};

export default function Layout({
  titleText,
  titleShow = true,
  backButtonText = "Volver",
  backButtonShow = true,
  showNextButton = true,
  // backRoute,
  nextRoute,
}: StepLayoutProps) {
  const navigate = useNavigate(); 
      const location = useLocation(); 

  return (
    <Container fluid className="step-layout p-0"> 
      {/* Header sticky */}
      <div className="fp-intro-sticky">
        {backButtonShow   &&
          <BackButton onBack={() => navigate(getBackUrl(location.pathname))} label={backButtonText} />
        }

        {titleShow && titleText &&
          <TitleBar title={titleText} />
        }
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
