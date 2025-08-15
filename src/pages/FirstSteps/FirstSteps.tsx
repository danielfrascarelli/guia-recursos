import { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import StepCard from "./components/StepCard";
import HorizontalStepper, { type StepDef } from "../../components/stepper/HorizontalStepper";

import styles from "./first-steps.module.scss";

// Tus pasos (título + cuerpo)
const STEPS = [
  {
    title: "Informate",
    body:
      "Si sospechas que tu familiar fue detenido, llama al 0800 XXXX para saber si fue detenido.",
  },
  {
    title: "Detención",
    body: "Cuando  tu familiar es detenido, podes llamar al 0800 YYYY para saber donde está. Tenes derecho a saber donde está y visitarlo"
  },
  {
    title: "Traslado",
    body: "Una vez detenido, está 10 días en Carcel Central y luego derivado a la unidad correspondiente. Llama al 0800 ZZZZ para saber a que unidad le corresponde."
  },
  { title: "Salud", body: "El acceso a la salud es tu derecho. Llama al 0800 HHHH para saber mas. Acceso al dentista, psicologo y medico general es obligación del estado." },
  { title: "Derechos", body: "El acceso a estudio es un derecho. Podes tramitarlo al 0800 RRRR." },
];

// Íconos descriptivos (Bootstrap Icons). Ajustá los que quieras.
const STEP_ICONS = ["bi-telephone", "bi-shield-lock", "bi-truck", "bi-heart-pulse", "bi-book"];

export default function FirstSteps() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx: number) => {
    if (idx >= 0 && idx < STEPS.length) setCurrent(idx);
  }, []);

  const onPrev = () => {
    if (current > 0) goTo(current - 1);
    else navigate('/tips');
  };


  const onNext = () => {
    if (current < STEPS.length - 1) goTo(current + 1);
    else navigate('/preguntas-frecuentes');
  };

  // Adaptamos a StepDef para el stepper (solo usa name + icon)
  const stepDefs: StepDef[] = STEPS.map((s, i) => ({
    name: s.title,
    icon: STEP_ICONS[i] ?? "bi-dot", // fallback por si faltara alguno
  }));

  return (
    <Container fluid className={styles.page}>
      <Row className="g-0">
        <Col xs={12}>
          {/* NEW: Stepper horizontal responsivo */}
          <HorizontalStepper
            steps={stepDefs}
            current={current}
            onSelectStep={goTo}  // si no querés click, borrá esta prop
          />
        </Col>

        <Col xs={12}>
          {/* Tarjeta del paso actual con CTA dentro */}
          <StepCard
            key={current}
            index={current}
            total={STEPS.length}
            title={STEPS[current].title}
            body={STEPS[current].body}
            onPrev={onPrev}
            onNext={onNext}
            // isFirst={current === 0}
            isLast={current === STEPS.length - 1}
          />
        </Col>
      </Row>
    </Container>
  );
}
