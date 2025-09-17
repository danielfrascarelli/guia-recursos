// SwipeNavigator.tsx
import React, { useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  onBack?: () => void;     // qué hacer al deslizar izq→der
  onNext?: () => void;     // qué hacer al deslizar der→izq
  thresholdPx?: number;    // distancia mínima en px para disparar (default 60)
  maxAngleDeg?: number;    // tolerancia al ángulo vs. vertical (default 30)
  maxTimeMs?: number;      // tiempo máximo del gesto (default 600ms)
  className?: string;
};

export default function SwipeNavigator({
  children,
  onBack,
  onNext,
  thresholdPx = 60,
  maxAngleDeg = 30,
  maxTimeMs = 600,
  className = ""
}: Props) {
  const start = useRef<{x:number;y:number;t:number;id:number|null}>({x:0,y:0,t:0,id:null});
  const [locked, setLocked] = useState(false);

  const onPointerDown: React.PointerEventHandler = (e) => {
    if (e.isPrimary === false) return;
    start.current = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId };
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setLocked(false);
  };

  const onPointerMove: React.PointerEventHandler = (e) => {
    if (start.current.id !== e.pointerId || locked) return;

    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);

    // Evitar robar el scroll vertical: solo si claramente horizontal
    const angle = Math.atan2(ady, adx) * 180 / Math.PI; // 0 = puro horizontal
    if (angle > maxAngleDeg) return;

    if (adx >= thresholdPx) {
      const dt = performance.now() - start.current.t;
      if (dt <= maxTimeMs) {
        setLocked(true);
        if (dx > 0) onBack?.();   // izq → der
        else        onNext?.();   // der → izq
        // Prevenir selección/scroll no deseado
        e.preventDefault();
      }
    }
  };

  const onPointerUp: React.PointerEventHandler = () => {
    start.current.id = null;
    setLocked(false);
  };

  return (
    <div
      className={className}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      // Permite scroll vertical pero nos deja detectar swipes horizontales
      style={{ touchAction: "pan-y" }}
      aria-live="off"
    >
      {children}
    </div>
  );
}
