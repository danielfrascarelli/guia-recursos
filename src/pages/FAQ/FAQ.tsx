import React from "react";

import styles from "./FAQ.module.scss";
// import BackButton from "../../components/common/back-button/BackButton";
import { SectionButton } from "../../components/common/section-button/SectionButton";
import {
  AlertIcon,
  PeopleIcon,
  TruckIcon,
  HeartIcon,
  KeyIcon,
  HomeIcon,
  PhoneIcon,
} from "../../assets/icons/icons";

type Item = {
  id: string;
  label: string;
  icon: React.ReactNode;
  variant: "green" | "orange";
  onClick?: () => void;
};

export default function FAQ() {
  const items: Item[] = [
    { id: "detencion", label: "Detención y primeros pasos", icon: <AlertIcon />, variant: "green" },
    { id: "visitas", label: "Visitas y contacto", icon: <PeopleIcon />, variant: "orange" },
    { id: "traslados", label: "Traslados", icon: <TruckIcon />, variant: "green" },
    { id: "salud", label: "Salud y sanciones", icon: <HeartIcon />, variant: "orange" },
    { id: "derechos", label: "Acceso a derechos y actividades", icon: <KeyIcon />, variant: "green" },
    { id: "egreso", label: "Liberación y egreso", icon: <HomeIcon />, variant: "orange" },
    { id: "contactos", label: "Contactos útiles", icon: <PhoneIcon />, variant: "green" },
  ];

  return (
    <div className={styles.screen}>
      {/* <header className={styles.header}>
        <BackButton label="Volver" onBack={() => window.history.back()} />
      </header> */}

      <main className={styles.main}>
        <h1 className={styles.title}>Preguntas frecuentes</h1>

        <nav className={styles.list} aria-label="Categorías de preguntas frecuentes">
          {items.map((item) => (
            <SectionButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              variant={item.variant}
              onClick={item.onClick}
            />
          ))}
        </nav>
      </main>
    </div>
  );
}
