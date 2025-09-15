import React, { useMemo } from "react";

type Side = "bottom" | "top" | "left" | "right";
type Lean = "left" | "right";

export type SpeechBubbleProps = {
  text: string;

  /* Dimensiones y padding */
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  paddingX?: number;
  paddingY?: number;

  /* Tipografía */
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number | string;

  /* Estilo del globo */
  radius?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;

  /* Piquito */
  tailSide?: Side;          // usamos "bottom"
  tailWidth?: number;
  tailHeight?: number;
  tailOffset?: number;      // desplaza el piquito desde el centro
  tailCurve?: number;       // 0..1
  tailLean?: Lean;          // << NUEVO: inclinación fija a izq/der (solo bottom)

  /* Posición/Tamaño del SVG */
  x?: number;
  y?: number;
  width?: number | string;
  height?: number | string;

  className?: string;
  style?: React.CSSProperties;
};

const measure = (() => {
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

function wrapLines({
  text, maxWidth, fontFamily, fontSize, fontWeight,
}:{
  text:string; maxWidth:number; fontFamily:string; fontSize:number; fontWeight:string|number;
}) {
  const font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  const out:string[] = [];
  for (const p of text.split("\n")) {
    const words = p.split(/\s+/).filter(Boolean);
    if (!words.length){ out.push(""); continue; }
    let line = words[0];
    for (let i=1;i<words.length;i++){
      const cand = line+" "+words[i];
      if (measure(font,cand).width <= maxWidth) line = cand;
      else { out.push(line); line = words[i]; }
    }
    out.push(line);
  }
  return out;
}

function ellipsizeToHeight(
  lines:string[], maxLines:number, maxWidth:number,
  fontFamily:string, fontSize:number, fontWeight:string|number
){
  if (lines.length <= maxLines) return lines;
  const font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  const trimmed = lines.slice(0, Math.max(1, maxLines));
  let last = trimmed[trimmed.length-1];
  while (last.length && measure(font, last+"…").width > maxWidth) last = last.slice(0,-1);
  trimmed[trimmed.length-1] = last + "…";
  return trimmed;
}

/* ----- Rect redondeado + piquito (con inclinación fija en bottom) ----- */
function bubblePathWithTail(
  x:number, y:number, w:number, h:number, r:number,
  tailSide:Side, tailWidth:number, tailHeight:number, tailOffset:number,
  tailCurve:number, tailLean:Lean = "right"
){
  const R = Math.min(r, Math.min(w,h)/2 - 1);
  const clamp = (v:number,a:number,b:number)=>Math.max(a,Math.min(b,v));

  if (tailSide === "bottom" || tailSide === undefined) {
    const cx = x + w/2 + tailOffset;         // centro del anclaje sobre el borde inferior
    const half = tailWidth/2;
    // puntos A y B (base del piquito sobre el borde inferior)
    const A = clamp(cx - half, x + R + 8, x + w - R - 8);
    const B = clamp(cx + half, x + R + 8, x + w - R - 8);

    // >>> inclinación fija: desplazamos la "punta" a izq/der unos px
    const TILT = 18;                          // magnitud fija de la inclinación
    const tipX  = cx + (tailLean === "right" ? TILT : -TILT);
    const tipY  = y + h + tailHeight;

    // curvatura (0 triángulo, 1 muy suave)
    const k = Math.max(0, Math.min(1, tailCurve));
    const c = (B - A) * 0.25 * k;

    return [
      `M ${x+R},${y}`,
      `H ${x+w-R}`,
      `A ${R},${R} 0 0 1 ${x+w},${y+R}`,
      `V ${y+h-R}`,
      `A ${R},${R} 0 0 1 ${x+w-R},${y+h}`,
      `H ${B}`,
      `Q ${B - c},${y+h} ${tipX},${tipY}`,    // curva hacia la punta
      `Q ${A + c},${y+h} ${A},${y+h}`,        // vuelta a la base
      `H ${x+R}`,
      `A ${R},${R} 0 0 1 ${x},${y+h-R}`,
      `V ${y+R}`,
      `A ${R},${R} 0 0 1 ${x+R},${y}`,
      "Z",
    ].join(" ");
  }

  // (top/left/right siguen igual que antes; omitidos por brevedad)
  // Puedes añadirlos si alguna vez los necesitás.
  return [
    `M ${x+R},${y}`,
    `H ${x+w-R}`,
    `A ${R},${R} 0 0 1 ${x+w},${y+R}`,
    `V ${y+h-R}`,
    `A ${R},${R} 0 0 1 ${x+w-R},${y+h}`,
    `H ${x+R}`,
    `A ${R},${R} 0 0 1 ${x},${y+h-R}`,
    `V ${y+R}`,
    `A ${R},${R} 0 0 1 ${x+R},${y}`,
    "Z"
  ].join(" ");
}

export default function SpeechBubble({
  text,
  maxWidth=480, maxHeight=10000, minWidth=160, paddingX=18, paddingY=14,
  fontFamily=`'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
  fontSize=40, lineHeight=1.12, fontWeight=800,
  radius=22, stroke="#222", strokeWidth=3.5, fill="#E9F1ED",
  tailSide="bottom", tailWidth=44, tailHeight=18, tailOffset=0, tailCurve=0.85,
  tailLean="right",                                     // << por defecto inclina a la derecha
  x=0, y=0, width="100%", height, className, style,
}: SpeechBubbleProps){
  const innerMaxW = Math.max(10, maxWidth - paddingX*2);
  const linesWrapped = useMemo(
    ()=>wrapLines({ text, maxWidth: innerMaxW, fontFamily, fontSize, fontWeight }),
    [text, innerMaxW, fontFamily, fontSize, fontWeight]
  );

  const linePx = fontSize * lineHeight;
  const usableH = Math.max(10, maxHeight - paddingY*2);
  const maxLines = Math.max(1, Math.floor(usableH / linePx));
  const lines = useMemo(
    ()=>ellipsizeToHeight(linesWrapped, maxLines, innerMaxW, fontFamily, fontSize, fontWeight),
    [linesWrapped, maxLines, innerMaxW, fontFamily, fontSize, fontWeight]
  );

  const bubbleW = Math.max(minWidth, Math.min(maxWidth, innerMaxW + paddingX*2));
  const bubbleH = paddingY*2 + lines.length * linePx;

  const textX = x + paddingX;
  const textY = y + paddingY + fontSize;

  const vbW = bubbleW + 2*radius + tailHeight + 2;
  const vbH = bubbleH + 2*radius + tailHeight + 2;

  const d = bubblePathWithTail(
    x+radius, y+radius, bubbleW-2*radius, bubbleH-2*radius, radius,
    tailSide, tailWidth, tailHeight, tailOffset, tailCurve, tailLean
  );

  return (
    <svg viewBox={`0 0 ${vbW} ${vbH}`} width={width} height={height}
         className={className} style={{display:"block", ...style}}
         role="img" aria-label="Globo con piquito inclinado">
      <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth}
            strokeLinejoin="round" strokeLinecap="round"/>
      <text x={textX} y={textY} fill={stroke} fontSize={fontSize}
            style={{ fontFamily, fontWeight: String(fontWeight) }}>
        {lines.map((ln,i)=>(
          <tspan key={i} x={textX} dy={i===0?0:linePx}>{ln}</tspan>
        ))}
      </text>
    </svg>
  );
}
