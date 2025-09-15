import { useNavigate } from "react-router-dom";

import familias_presentes from '../../assets/images/familias_presentes.png';
import europe from '../../assets/images/europe.svg'

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
            Guía de Recursos
          </h1>
        </section>

        <section>
          <h2 className="mx-1 mx-md-5 text-center  lh-base">
            Esta guía es para quienes estamos afuera, acompañando y sosteniendo los procesos de los procesos de encarcelamiento.
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
        <footer className="d-flex justify-content-center align-items-center gap-4 pb-1">
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
        </footer>
      </div>
    </main>
  );
}