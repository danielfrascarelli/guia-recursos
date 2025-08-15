import { Card, Button } from "react-bootstrap";

import styles from "../first-steps.module.scss";

type StepCardProps = {
  index: number;
  total: number;
  title: string;
  body: string;
  onPrev: () => void;
  onNext: () => void;
  // isFirst: boolean;
  isLast: boolean;
};

export default function StepCard({
  index,
  total,
  title,
  body,
  onPrev,
  onNext,
  // isFirst,
  isLast,
}: StepCardProps) {
  return (
    <Card className={`${styles.card} ${styles.animIn}`} role="group" aria-label={`Paso ${index + 1} de ${total}`}>
      <Card.Body>
        {/* Encabezado del paso actual */}
        <div className={styles.cardHeader}>
          <span className={styles.badgeCurrent}>{index + 1}</span>
          <h2 className={styles.cardTitle}>{title}</h2>
        </div>

        <p className={styles.cardBodyText}>{body}</p>

        {/* CTA dentro de la tarjeta */}
        <div className={styles.cardCtaRow} aria-live="polite">
          <div className={styles.btnRow}>
            <Button
              variant="outline-secondary"
              className={styles.btnPrev}
              onClick={onPrev}
              // disabled={isFirst}
              aria-label="Anterior"
            >
              Anterior
            </Button>

            <Button
              className={styles.btnNext}
              onClick={onNext}
              aria-label={isLast ? "Finalizar" : "Siguiente"}
            >
              {isLast ? "Finalizar" : "Siguiente"}
              {!isLast && <i className="bi bi-arrow-right ms-2" aria-hidden="true" />}
            </Button>
          </div>
          <div className={styles.progressText}>
            {index + 1} / {total}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
