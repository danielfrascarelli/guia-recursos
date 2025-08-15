import { ListGroup } from "react-bootstrap";

import styles from "../first-steps.module.scss";

type StepListProps = {
  steps: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function StepList({ steps, currentIndex, onSelect }: StepListProps) {
  return (
    <nav aria-label="Lista de pasos" className={styles.listWrap}>
      <ListGroup as="ul" className={styles.list}>
        {steps.map((label, i) => {
          const active = i === currentIndex;
          return (
            <ListGroup.Item
              as="li"
              key={i}
              action
              role="button"
              tabIndex={0}
              aria-current={active ? "step" : undefined}
              aria-label={`Paso ${i + 1}: ${label}${active ? " (actual)" : ""}`}
              className={`${styles.listItem} ${active ? styles.active : ""}`}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(i);
                }
              }}
            >
              <span className={styles.badge}>{i + 1}</span>
              <span className={styles.itemLabel}>{label}</span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </nav>
  );
}
