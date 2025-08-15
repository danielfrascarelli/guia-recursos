import { Container, Button, Image } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import "./home.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const onNext = () => navigate('/introduccion');
  const onSkipIntro = () => navigate('/preguntas-frecuentes');

  return (
    <div className="fp-home">
      <Container fluid="md" className="fp-home__inner">
        {/* Título */}
        <h1 className="fp-home__title">Guía de recursos</h1>

        {/* Recuadro con texto */}
        <div className="fp-home__callout">
          <p>
            Esta guía es para quienes estamos afuera, acompañando y sosteniendo
            los procesos de encarcelamiento.
          </p>
        </div>

        {/* Botón “Comenzar” */}
        <div className="fp-home__cta-wrap">
          <Button className="fp-home__cta" onClick={onNext}>
            <span>Comenzar</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Button>
        </div>

        {/* Botón “Comenzar” */}
        <div className="fp-home__cta-wrap">
          <Button className="fp-home__cta" onClick={onSkipIntro}>
            <span>Saltar intro</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Button>
        </div>

        {/* Logo / sello inferior */}
        <div className="fp-home__brand">
          <Image
            src={"https://via.placeholder.com/96x96.png?text=Logo"}
            alt="Familias Presentes (logo)"
            roundedCircle
            width={72}
            height={72}
          />
          <div className="fp-home__brand-line" />
        </div>
      </Container>
    </div>
  );
}
