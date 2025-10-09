import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import BackButton from "../components/back-button/BackButton";

import "../styles/layout.scss";
import getBackUrl from "../shared/utils/Back";
import LayoutTitleBar from "./layout-title-bar copy/LayoutTitleBar";
import SwipeNavigator from "./Swipe";

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

  const onBackHandler = () => {
    window.scrollTo(0, 0);
    navigate(getBackUrl(location.pathname));
  };

  const onNextHandler = () => {
    if (showNextButton && nextRoute) {
      window.scrollTo(0, 0);
      navigate(nextRoute);
    }
  };

  return (
    <SwipeNavigator
      thresholdPx={150}     // antes eran 60
      maxAngleDeg={25}      // más estricto con el ángulo
      maxTimeMs={400}       // un poco menos de tiempo
      onBack={() => navigate(-1)}
      onNext={onNextHandler} // o la que corresponda
      className="h-full"

    >
      <div className={`step-layout bg--brand-bg-light p-0 ${showNextButton && nextRoute ? "has-cta" : ""}`}    >
        <div className="fp-intro-sticky">
          {backButtonShow &&
            <BackButton onBack={onBackHandler} label={backButtonText} />
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
            <button className="fp-intro-cta" onClick={onNextHandler}>
              Siguiente <i className="bi bi-arrow-right" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </SwipeNavigator>
  );
}
