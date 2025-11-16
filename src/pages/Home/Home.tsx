import { useNavigate } from "react-router-dom";

import familias_presentes from '../../assets/images/logos/familias_presentes.svg';
import europe from '../../assets/images/logos/europe.svg'
import inr from '../../assets/images/logos_contactos_utiles/inr.svg'

import "./home.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const onNext = () => navigate("/introduccion");
  const onSkipIntro = () => navigate("/mapa-de-ruta");

  return (
    <main className="min-vh-100 d-flex align-items-stretch bg--brand-bg-light fp-home">
      <div className="container my-3 d-flex flex-column justify-content-between">
        <header>
          <div className="text-center mt-4">
            <img
              src={familias_presentes}
              alt="Familias Presentes"
              title="Familias Presentes"
              className="img-fluid"
              style={{ height: 100 }}
              onClick={()=>{ window.open('https://familiaspresentes.uy', '_blank', 'noopener,noreferrer'); }}
            />
          </div>
        </header>

        <section className="fp-home-title-container">
          <h1 className="fw-bold color--brand-dark fp-home-title mt-33vh lh-base">
            Guía para el acompañamiento
          </h1>
        </section>

        <section>
          <h2 className="mx-1 mx-md-5 text-center  lh-base">
            Esta guía es para quienes estamos afuera, acompañando y sosteniendo los procesos de encarcelamiento.
          </h2>
        </section>

        <section className="mb-4">
          <div className="fp-home-cta-wrap">
            <button onClick={onNext} className="fp-home-cta"            >
              Comenzar
            </button>
          </div>

          <div className="text-center mt-3">
            <button
              type="button"
              onClick={onSkipIntro}
              className="btn btn-link text-secondary text-decoration-none p-0"
            >
              Saltar intro <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
            </button>
          </div>
        </section>
        <footer className="d-flex justify-content-center align-items-end gap-3 pb-3">
          <div className="text-left">
            <small className="d-block text-secondary mb-1">Financia:</small>
            <img
              src={europe}
              alt="Unión Europea"
              title="Unión Europea"
              className="img-fluid"
              style={{ height: 40 }}
            />
          </div>
          <div className="text-left">
            <small className="d-block text-secondary mb-1">Apoya:</small>
            <img
              src={inr}
              alt="Instituto Nacional de Rehabilitació"
              title="Instituto Nacional de Rehabilitación"
              className="img-fluid"
              style={{ height: 40 }}
            />
          </div>         
        </footer>
      </div>
    </main>
  );
}