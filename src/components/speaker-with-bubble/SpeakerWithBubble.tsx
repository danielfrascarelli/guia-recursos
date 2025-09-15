import React, { useMemo } from "react";

type Side = "left" | "right";
type CSSSize = number | string;

type Palette = {
  paper?: string;      // fondo del lienzo
  ink?: string;        // color de línea (sketch)
  bubbleFill?: string; // fondo del globo
};

export type MegaphoneSketchProps = {
  /** Texto del globo (acepta saltos de línea \n) */
  text: string;

  /** Ancho máximo del globo antes de envolver texto */
  bubbleMaxWidth?: number;

  /** Posición del globo (caja) dentro del viewBox (1200x700) */
  bubbleX?: number;
  bubbleY?: number;

  /** Lado desde donde sale la cola */
  bubbleSide?: Side;

  /** Offset vertical de la cola dentro del globo (px desde el top del globo) */
  bubbleTailOffset?: number;

  /** Punto “punta” de la cola (por defecto cerca de la boca/megáfono) */
  tailTipX?: number;
  tailTipY?: number;

  /** Padding interno del globo */
  padX?: number;
  padY?: number;

  /** Tipografía */
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number | string;

  /** Geometría del globo */
  radius?: number;
  strokeWidth?: number;
  tailWidth?: number;
  tailHeight?: number;

  /** Colores y tamaño del SVG */
  palette?: Palette;
  width?: CSSSize;
  height?: CSSSize;
  className?: string;
  style?: React.CSSProperties;
};

/* ---------- helpers de medición y wrap (por palabras) ---------- */
const measurer = (() => {
  let ctx: CanvasRenderingContext2D | null = null;
  return (font: string, text: string) => {
    if (typeof document === "undefined") return { width: text.length * 10 };
    if (!ctx) ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return { width: text.length * 10 };
    ctx.font = font;
    const m = ctx.measureText(text);
    return { width: m.width };
  };
})();

function wrapLines(opts: {
  text: string;
  maxWidth: number;
  fontFamily: string;
  fontSize: number;
  fontWeight: string | number;
}) {
  const { text, maxWidth, fontFamily, fontSize, fontWeight } = opts;
  const font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  const paras = text.split("\n");
  const lines: string[] = [];

  for (const p of paras) {
    const words = p.split(/\s+/).filter(Boolean);
    if (!words.length) {
      lines.push("");
      continue;
    }
    let line = words[0];
    for (let i = 1; i < words.length; i++) {
      const cand = line + " " + words[i];
      if (measurer(font, cand).width <= maxWidth) line = cand;
      else {
        lines.push(line);
        line = words[i];
      }
    }
    lines.push(line);
  }
  return lines;
}

/* ---------- path de globo (caja redondeada) ---------- */
function roundedRectPath(x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, h / 2 - 1);
  return [
    `M ${x + rr},${y}`,
    `H ${x + w - rr}`,
    `A ${rr},${rr} 0 0 1 ${x + w},${y + rr}`,
    `V ${y + h - rr}`,
    `A ${rr},${rr} 0 0 1 ${x + w - rr},${y + h}`,
    `H ${x + rr}`,
    `A ${rr},${rr} 0 0 1 ${x},${y + h - rr}`,
    `V ${y + rr}`,
    `A ${rr},${rr} 0 0 1 ${x + rr},${y}`,
    "Z",
  ].join(" ");
}

/* ---------- path de cola curva separada (se dibuja ENCIMA) ---------- */
function bubbleTailPath(opts: {
  side: Side;
  boxX: number;
  boxY: number;
  boxW: number;
  boxH: number;
  radius: number;
  tailW: number;
  tailH: number;
  tailOffset: number;
  tipX: number;
  tipY: number;
}) {
  const { side, boxX, boxY, boxW, boxH, radius, tailW, tailH, tailOffset, tipX, tipY } = opts;
  const rr = Math.min(radius, boxH / 2 - 1);
  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
  const baseY = clamp(boxY + tailOffset, boxY + rr + 2, boxY + boxH - rr - 2);
  const baseX = side === "left" ? boxX : boxX + boxW;

  const dir = side === "left" ? -1 : 1;
  const c = rr * 0.9;
  const yTop = baseY - tailH / 2;
  const yBot = baseY + tailH / 2;

  // pequeño “encastre” hacia adentro para que no se note unión con la caja
  const inset = dir * 0.5;

  return [
    `M ${baseX + inset},${yBot}`,
    `C ${baseX + dir * c},${yBot} ${tipX},${tipY + tailH * 0.55} ${tipX},${tipY}`,
    `C ${tipX},${tipY - tailH * 0.55} ${baseX + dir * c},${yTop} ${baseX + inset},${yTop}`,
    "Z",
  ].join(" ");
}

export default function MegaphoneSketch({
  text,
  bubbleMaxWidth = 520,
  bubbleX = 780,
  bubbleY = 70,
  bubbleSide = "left",
  bubbleTailOffset = 80,
  /* punta de la cola por defecto (boca/megáfono) */
  tailTipX = 515,
  tailTipY = 220,
  padX = 18,
  padY = 14,
  fontFamily = `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
  fontSize = 28,
  lineHeight = 1.22,
  fontWeight = 800,
  radius = 20,
  strokeWidth = 4,
  tailWidth = 28,
  tailHeight = 24,
  palette,
  width = "min(1100px, 100%)",
  height,
  className,
  style,
}: MegaphoneSketchProps) {
  /* paleta tipo sketch */
  const colors = {
    paper: "#F7F3EC",
    ink: "#232323",
    bubbleFill: "#E6EFEA",
    ...(palette || {}),
  };

  /* padding asimétrico para no invadir la cola */
  const padLeft = padX + (bubbleSide === "left" ? tailWidth : 0);
  const padRight = padX + (bubbleSide === "right" ? tailWidth : 0);
  const textWidthMax = bubbleMaxWidth - padLeft - padRight;

  const lines = useMemo(
    () =>
      wrapLines({
        text,
        maxWidth: textWidthMax,
        fontFamily,
        fontSize,
        fontWeight,
      }),
    [text, textWidthMax, fontFamily, fontSize, fontWeight]
  );

  const textHeight = lines.length * fontSize * lineHeight;
  const boxW = padLeft + Math.min(textWidthMax, bubbleMaxWidth) + padRight;
  const boxH = padY * 2 + textHeight;
  const textStartX = bubbleX + padLeft;
  const textStartY = bubbleY + padY + fontSize;

  /* viewBox 1200x700 (escena completa) */
  const vbW = 1200;
  const vbH = 700;

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      width={width}
      height={height}
      className={className}
      style={{ display: "block", ...style }}
      role="img"
      aria-label="Mujer con megáfono; globo detrás de la cabeza"
    >
      {/* fondo papel */}
      <rect x="0" y="0" width={vbW} height={vbH} fill={colors.paper} />

      {/* -------- GLOBO (CAJA) – DETRÁS DE LA CABEZA -------- */}
      <g id="bubble-back">
        <path
          d={roundedRectPath(bubbleX, bubbleY, boxW, boxH, radius)}
          fill={colors.bubbleFill}
          stroke={colors.ink}
          strokeWidth={strokeWidth}
        />
        {/* Texto dentro del globo */}
        <text
          x={textStartX}
          y={textStartY}
          fill={colors.ink}
          fontSize={fontSize}
          style={{ fontFamily, fontWeight: String(fontWeight) }}
        >
          {lines.map((ln, i) => (
            <tspan key={i} x={textStartX} dy={i === 0 ? 0 : fontSize * lineHeight}>
              {ln}
            </tspan>
          ))}
        </text>
      </g>

      {/* -------- FIGURA – ENCIMA DEL GLOBO -------- */}
      <g id="figure" transform="translate(120,120)" stroke={colors.ink} strokeWidth={strokeWidth} fill="none">
        {/* cabello */}
        <path
          d="M90,70 C100,10 160,-5 210,10 C260,25 300,60 300,115 C300,205 100,190 90,120 Z"
          fill="none"
        />
        {/* cabeza */}
        <circle cx="200" cy="110" r="60" />
        {/* ojo y boca */}
        <circle cx="184" cy="110" r="4" fill={colors.ink} stroke="none" />
        <path d="M176,130 Q196,144 216,130" />
        {/* cuello y hombros (líneas sueltas de sketch) */}
        <path d="M170,160 Q200,176 230,160" />
        <path d="M90,260 Q200,220 310,260" />
        {/* mano y empuñadura */}
        <rect x="410" y="260" width="20" height="80" rx="8" />
        <path d="M380,280 Q410,270 420,300 Q410,330 388,326" />
        {/* megáfono (cono y borde) */}
        <path d="M430,240 L610,200 C660,188 700,240 660,258 L430,320 Z" />
        <ellipse cx="610" cy="250" rx="36" ry="64" />
      </g>

      {/* -------- COLA DEL GLOBO – ENCIMA DE LA FIGURA -------- */}
      <g id="bubble-tail-front">
        <path
          d={bubbleTailPath({
            side: bubbleSide,
            boxX: bubbleX,
            boxY: bubbleY,
            boxW: boxW,
            boxH: boxH,
            radius,
            tailW: tailWidth,
            tailH: tailHeight,
            tailOffset: bubbleTailOffset,
            tipX: tailTipX,
            tipY: tailTipY,
          })}
          fill={colors.bubbleFill}
          stroke={colors.ink}
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}
