import { memo } from "react";

import styles from "./HorizontalStepper.module.scss";

export type StepDef = {
  name: string;        // texto del paso (solo se ve en el actual)
  icon: string;        // clase de Bootstrap Icons, ej: "bi-person"
};

type Props = {
  steps: StepDef[];
  current: number;                // índice actual (0-based)
  onSelectStep?: (idx: number) => void; // opcional: click en paso
};

function HorizontalStepper({ steps, current, onSelectStep }: Props) {
  return (
    <div className={styles.stepper} role="list" aria-label="Progreso de pasos">
      {/* línea de fondo */}
      <div className={styles.track} aria-hidden="true" />

      {/* línea de progreso */}
      <div
        className={styles.progress}
        style={{
          // progreso hasta el paso actual: de 0 a (steps-1) segmentos
          width:
            steps.length > 1
              ? `${(current / (steps.length - 1)) * 100}%`
              : "0%",
        }}
        aria-hidden="true"
      />

      {/* pasos */}
      {steps.map((s, i) => {
        const isActive = i === current;
        const isDone = i < current;

        return (
          <button
            key={i}
            type="button"
            role="listitem"
            aria-current={isActive ? "step" : undefined}
            className={[
              styles.step,
              isActive ? styles.active : "",
              isDone ? styles.done : "",
            ].join(" ")}
            onClick={() => onSelectStep?.(i)}
            aria-label={
              isActive ? `Paso ${i + 1} (actual): ${s.name}` : `Paso ${i + 1}`
            }
          >
            {/* ícono descriptivo */}
            <i className={`bi ${s.icon} ${styles.icon}`} aria-hidden="true" />

            {/* número */}
            <span className={styles.number}>{i + 1}</span>

            {/* label solo para el actual */}
            {isActive && <span className={styles.label}>{s.name}</span>}
          </button>
        );
      })}
    </div>
  );
}

export default memo(HorizontalStepper);
