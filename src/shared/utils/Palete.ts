// shared/button-utils.ts
// Utilidades reusables para mapear tu paleta → variables de botón Bootstrap 5

import type { CSSProperties } from "react";

/** Estructura de una paleta (colores por estado del botón) */
export type PaletteSpec = {
    text: string;        // color texto normal
    bg: string;          // fondo normal
    border: string;      // color borde normal (o "none")
    hoverText: string;   // color texto hover/active
    hoverBg: string;     // fondo hover/active
    hoverBorder: string; // borde hover/active
    focusRgb: string;    // "r,g,b" para halo de focus (Bootstrap usa RGB)
    shadow?: string;       // normal
    hoverShadow?: string;  // :hover
    activeShadow?: string; // :active
};

/** Opciones extra para el tamaño/espaciado del botón */
export type BtnVarsOptions = {
    paddingX?: string;   // ej. "19px"
    paddingY?: string;   // ej. ".6rem"
    borderWidth?: string;// ej. "1px" | "0"
    shadowRgb?: string;  // override del focusRgb si querés
};

/**
 * Convierte una `PaletteSpec` a variables CSS de Bootstrap para botones.
 * Devuelve un objeto `style` listo para pasar a <button style={...}/>
 */
export function toBsBtnVars(p: PaletteSpec, opts?: BtnVarsOptions): CSSProperties {
    const style: CSSProperties = {
        // estado normal
        ["--bs-btn-color" as any]: p.text,
        ["--bs-btn-bg" as any]: p.bg,
        ["--bs-btn-border-color" as any]: p.border,

        // hover / active
        ["--bs-btn-hover-color" as any]: p.hoverText,
        ["--bs-btn-hover-bg" as any]: p.hoverBg,
        ["--bs-btn-hover-border-color" as any]: p.hoverBorder,
        ["--bs-btn-active-color" as any]: p.hoverText,
        ["--bs-btn-active-bg" as any]: p.hoverBg,
        ["--bs-btn-active-border-color" as any]: p.hoverBorder,

        // disabled (opcional, valores neutros)
        ["--bs-btn-disabled-color" as any]: "rgba(0,0,0,.35)",
        ["--bs-btn-disabled-bg" as any]: "rgba(0,0,0,.06)",
        ["--bs-btn-disabled-border-color" as any]: "transparent",

        // focus ring (RGB)
        ["--bs-btn-focus-shadow-rgb" as any]: opts?.shadowRgb ?? p.focusRgb,

        // espaciado y borde
        ["--bs-btn-padding-x" as any]: opts?.paddingX ?? "19px",
        ["--bs-btn-padding-y" as any]: opts?.paddingY ?? ".6rem",
        ["--bs-btn-border-width" as any]: opts?.borderWidth ?? "1px",
        // <- NUEVAS vars propias para sombras por estado
        ["--brand-btn-shadow" as any]: p.shadow ?? "none",
        ["--brand-btn-hover-shadow" as any]: p.hoverShadow ?? (p.shadow ?? "none"),
        ["--brand-btn-active-shadow" as any]: p.activeShadow ?? (p.hoverShadow ?? p.shadow ?? "none"),
    };

    // Si definiste "none" como borde, lo anulamos prolijamente
    if ((p.border || "").toLowerCase() === "none") {
        (style as any)["--bs-btn-border-width" as any] = "0";
        (style as any)["--bs-btn-border-color" as any] = "transparent";
    }

    return style;
}

/** Mapea un valor semántico a clases Bootstrap de redondeo */
export function radiusClass(
    rounded: "none" | "sm" | "md" | "lg" | "xl" | "pill" = "lg"
): string {
    switch (rounded) {
        case "none": return "";
        case "sm": return "rounded-2";
        case "md": return "rounded-3";
        case "lg": return "rounded-4";
        case "xl": return "rounded-5";
        case "pill": return "rounded-pill";
    }
}

/** Variantes derivadas (por si te sirven): outline / ghost */
export function outlineFrom(p: PaletteSpec): PaletteSpec {
    return {
        text: p.bg,
        bg: "transparent",
        border: p.bg,
        hoverText: p.text,
        hoverBg: p.bg,
        hoverBorder: p.bg,
        focusRgb: p.focusRgb,
    };
}

export function ghostFrom(p: PaletteSpec): PaletteSpec {
    return {
        text: p.bg,
        bg: "transparent",
        border: "none",
        hoverText: p.text,
        hoverBg: `color-mix(in srgb, ${p.bg} 10%, black)`,
        hoverBorder: "none",
        focusRgb: p.focusRgb,
    };
}
