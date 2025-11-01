import './flat-offset-card.scss';
import type { FlatOffsetCardProps } from './FlatOffsetCardProps';

export default function FlatOffsetCard({
  borderColor = "#132c76",
  bgColor = "#edc9ab",
  borderWidth = 4,
  radius = 28,
  offsetX = 16,
  offsetY = 16,
  overhangX = 18,
  overhangY = 18,
  padding = 10,
  className = "",
  style,
  children,
}: FlatOffsetCardProps) {
  const vars: React.CSSProperties = {
    ["--oc-border" as any]: borderColor,
    ["--oc-bg" as any]: bgColor,
    ["--oc-bw" as any]: `${borderWidth}px`,
    ["--oc-radius" as any]: `${radius}px`,
    ["--oc-off-x-start" as any]: `${offsetX}px`,
    ["--oc-off-y-start" as any]: `${offsetY}px`,
    ["--oc-over-x" as any]: `${overhangX}px`,
    ["--oc-over-y" as any]: `${overhangY}px`,
    ["--oc-pad" as any]: `${padding}px`,
    ...style,
  };

  return (
    <div className={`flat-offset-card ${className}`} style={vars}>
      <div className="flat-offset-card__content">{children}</div>
    </div>
  );
}
