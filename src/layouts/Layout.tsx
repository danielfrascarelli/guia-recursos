import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import BackButton from "../components/back-button/BackButton"; 

import "../styles/layout.scss";
import getBackUrl from "../shared/utils/Back";
import LayoutTitleBar from "./layout-title-bar copy/LayoutTitleBar";

type StepLayoutProps = {
  titleText?: string;
  titleShow?: boolean
  backButtonText?: string;
  backButtonShow?: boolean
  showNextButton?: boolean;
  nextRoute?: string;
};

export default function Layout({
  titleText,
  titleShow = true,
  backButtonText = "Atrás",
  backButtonShow = true,
  showNextButton = true,
  nextRoute,
}: StepLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={`step-layout bg--brand-bg-light p-0 ${showNextButton && nextRoute ? "has-cta" : ""}`}    >
      <div className="fp-intro-sticky">
        {backButtonShow &&
          <BackButton onBack={() => navigate(getBackUrl(location.pathname))} label={backButtonText} />
        }

        {titleShow && titleText &&
          <LayoutTitleBar title={titleText} />
        }
      </div>

      <div className="fp-intro-content">
        <Outlet />
      </div>

      {showNextButton && nextRoute && (
        <div className="fp-intro-cta-wrap">
          <button className="fp-intro-cta" onClick={() => navigate(nextRoute)}>
            Siguiente <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
