export type ImageBoxButtonProps = {
  // borderColor?: string;
  // bgColor?: string;
  // borderWidth?: number;
  // radius?: number;

  // /** Corrimiento hacia adentro (arriba/izquierda) */
  // offsetX?: number;   // default 16
  // offsetY?: number;   // default 16
  // /** Overhang/salida hacia afuera (derecha/abajo) */
  // overhangX?: number; // default 18
  // overhangY?: number; // default 18
  // padding?: number;
  onClick: () => void;

  srcImg: string;
  label: string;

  className?: string;
  style?: React.CSSProperties;


  // children: React.ReactNode;
};