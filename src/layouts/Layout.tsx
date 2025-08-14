import { Outlet, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import "../styles/layout.scss";

export default function Layout() {
  return (
    <Container fluid className="step-layout p-0">
      {/* Header sticky */}
      <div className="fp-intro-sticky">
        <div className="fp-topbar-1">
          <BackButton onBack={onBack} />
        </div>
        <TitleBar title={title} />
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
