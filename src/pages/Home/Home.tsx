import { useNavigate } from "react-router-dom";

import familias_presentes from '../../assets/images/logos/familias_presentes.png';
import europe from '../../assets/images/logos/europe.svg'
import coope_bien_alto from '../../assets/images/logos/coope_bien_alto.png'
import inr from '../../assets/images/logos_contactos_utiles/logo_inr.png'

import "./home.scss";




export default function HomePage() {
  const navigate = useNavigate();
  const onNext = () => navigate("/introduccion");
  const onSkipIntro = () => navigate("/mapa-de-ruta");

  return (
    <main className="min-vh-100 d-flex align-items-stretch bg--brand-bg-light">
      <div className="container my-3 d-flex flex-column justify-content-between">

        <header></header>

        <section className="fp-home-title-container">
          <h1 className="fw-bold color--brand-dark fp-home-title mt-33vh lh-base">
            Guía para el acompañamiento
          </h1>
        </section>

        <section>
          <h2 className="mx-1 mx-md-5 text-center  lh-base">
            Esta guía es para quienes estamos afuera, acompañando y sosteniendo los procesos de encarcelamiento.
            {/* {" "}
            <InlineSpotlight bg="var(--brand-sage)" color="white" rounded={1} px={0.4}>
              acompañando y sosteniendo
            </InlineSpotlight>
            {" "}
            
            {" "}
            <InlineSpotlight bg="var(--brand-wine)" color="white" rounded={1} px={0.4}>
              encarcelamiento
            </InlineSpotlight>
            . */}
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

        {/* logos */}
        {/* <footer className="d-flex justify-content-center align-items-center gap-4 pb-1">
          <img
            src={familias_presentes}
            alt="Familias Presentes"
            className="img-fluid"
            style={{ height: 48 }}
          />
          <img
            src={europe}
            alt="Unión Europea"
            className="img-fluid"
            style={{ height: 48 }}
          />
        </footer> */}
        <footer className="d-flex justify-content-center align-items-end gap-3 pb-3">
          {/* Familias Presentes */}
          <div className="text-center">
            <img
              src={familias_presentes}
              alt="Familias Presentes"
              title="Familias Presentes"
              className="img-fluid"
              style={{ height: 40 }}
              onClick={()=>{ window.open('https://familiaspresentes.uy', '_blank', 'noopener,noreferrer'); }}
            />
          </div>

          {/* Unión Europea */}
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

          {/* INR */}
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

          {/* Cooperativa Bien Alto */}
          <div className="text-left">
            <small className="d-block text-secondary mb-1">Produce:</small>
            <img
              src={coope_bien_alto}
              alt="Cooperativa Bien Alto"
              title="Cooperativa Bien Alto"
              className="img-fluid"
              style={{ height: 40 }}
              onClick={()=>{ window.open('https://www.instagram.com/bienaltocooperativa', '_blank', 'noopener,noreferrer'); }}
            />
          </div>
        </footer>

      </div>
    </main>
  );
}