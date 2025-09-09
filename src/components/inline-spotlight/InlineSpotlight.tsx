import React from "react";

type InlineSpotlightProps = {
  /** Texto o nodos a resaltar */
  children: React.ReactNode;
  /** Color de fondo (podés pasar una variable CSS o un hex) */
  bg?: string;    // ej: "var(--brand-sage)" o "#7CA192"
  /** Color de texto */
  color?: string; // ej: "white" o "var(--brand-dark)"
  /** Borde redondeado Bootstrap: 0,1,2,3,4 o "pill" */
  rounded?: 0 | 1 | 2 | 3 | 4 | "pill";
  /** Padding horizontal en rem (default 0.25) */
  px?: number;
  /** Padding vertical en rem (default 0) */
  py?: number;
  /** Clases extra Bootstrap/utilidades */
  className?: string;
  /** Usar <mark> (semántico) o <span> */
  as?: "mark" | "span";
};

export default function InlineSpotlight({
  children,
  bg = "var(--bs-warning)",         // fondo por defecto
  color = "var(--bs-body-bg)",      // texto por defecto
  rounded = 1,
  px = 0.25,
  py = 0,
  className = "",
  as = "mark",
}: InlineSpotlightProps) {
  const El = as as any;
  const roundedClass =
    rounded === "pill" ? "rounded-pill" : `rounded-${rounded}`;

  return (
    // <>&nbsp;
      <El
        className={[
          "d-inline-block",
          roundedClass,
          "fw-semibold",      // un poco más de peso
          className,
        ].join(" ")}
        style={{
          backgroundColor: bg,
          color,
          padding: `${py}rem ${px}rem`,
          lineHeight: 1.2,
        }}
      >
        {children}
      </El>
      // &nbsp;}    </>
  );
}
