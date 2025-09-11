// // src/layouts/Layout.tsx
// import { Outlet, useNavigate, useLocation } from "react-router-dom";

// export default function Layout({
//   titleText,
//   titleShow = true,
//   backButtonText = "Volver",
//   backButtonShow = true,
//   showNextButton = false,
//   nextRoute,
// }: {
//   titleText?: string;
//   titleShow?: boolean;
//   backButtonText?: string;
//   backButtonShow?: boolean;
//   showNextButton?: boolean;
//   nextRoute?: string;
// }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <div className="min-vh-100 position-relative bg-light">
//       {/* Topbar sticky */}
//       <div className="sticky-top bg-warning py-2">
//         <div className="container d-flex align-items-center gap-3">
//           {backButtonShow && (
//             <button
//               onClick={() => navigate(-1)}
//               className="btn btn-link text-dark text-decoration-none p-0 d-inline-flex align-items-center"
//             >
//               <i className="bi bi-arrow-left me-2" aria-hidden="true" />
//               {backButtonText}
//             </button>
//           )}
//           {titleShow && (
//             <h1 className="h5 m-0 text-dark text-truncate">{titleText}</h1>
//           )}
//         </div>
//       </div>

//       {/* Contenido */}
//       <main className="container py-3">
//         <Outlet />
//       </main>

//       {/* CTA fijo opcional */}
//       {showNextButton && nextRoute && (
//         <div className="position-fixed start-0 end-0 bottom-0 py-3 bg-gradient"
//              style={{ pointerEvents: "none", background: "linear-gradient(180deg,transparent,rgba(0,0,0,.05))" }}>
//           <div className="container d-flex justify-content-center" style={{ pointerEvents: "auto" }}>
//             <button
//               className="btn btn-warning btn-lg rounded-pill shadow"
//               onClick={() => navigate(nextRoute)}
//             >
//               Siguiente <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

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
  backButtonText = "Atrás",
  backButtonShow = true,
  showNextButton = true,
  // backRoute,
  nextRoute,
}: StepLayoutProps) {
  // showNextButton=false;
  const navigate = useNavigate();
  const location = useLocation();
//  h-100
  return (
    <div  className={`step-layout bg--brand-bg-light p-0 ${showNextButton && nextRoute ? "has-cta" : ""}`}    >
      <div className="fp-intro-sticky">
        {backButtonShow &&
          <BackButton onBack={() => navigate(getBackUrl(location.pathname))} label={backButtonText} />
        }

        {titleShow && titleText &&
          <TitleBar title={titleText} />
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
