import './box-card.scss';
import type { BoxCardProps } from './BoxCardProps';

import important from '../../assets/images/icons/important.svg';

export default function BoxCard({
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
  imgSrc
}: BoxCardProps) {
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
      <div className="common-layout-margin d-flex flex-row align-items-center gap-3">
        <div className="d-flex justify-content-center align-items-center flex-shrink-0">
          <img src={imgSrc ?? important} className="img-logo" alt="important" />
        </div>

        <div className="flat-offset-card__content flex-grow-1 mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
