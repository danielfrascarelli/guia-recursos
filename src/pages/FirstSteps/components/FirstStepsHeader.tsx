import { useState } from "react";
import HorizontalStepper, { type StepDef } from "../../../components/stepper/HorizontalStepper";

const steps: StepDef[] = [
  { name: "Detención",          icon: "bi-shield-lock" },
  { name: "Contacto",           icon: "bi-telephone" },
  { name: "Traslado",           icon: "bi-truck" },
  { name: "Salud",  icon: "bi-heart-pulse" },
  { name: "Derechos",           icon: "bi-book" },
];

export default function FirstStepsHeader() {
  const [current, setCurrent] = useState(0);

  return (
    <HorizontalStepper
      steps={steps}
      current={current}
      onSelectStep={setCurrent} // permitir click; si no querés click, quítalo
    />
  );
}
