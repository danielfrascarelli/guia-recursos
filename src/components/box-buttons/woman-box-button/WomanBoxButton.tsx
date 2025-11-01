import './woman-box-button.scss';
import type { WomanCardProps as WomanBoxButtonProps } from './WomanBoxButtonProps';

import woman from "../../../assets/images/people/woman.svg";

export default function WomanBoxButton({
  className = "",
  children,
}: WomanBoxButtonProps) {

  return (
    <div className={`woman-card__container`} >
      <div className={`woman-card ${className}`} >
        <div className="d-flex flex-row align-items-center gap-3">
          <div className="d-flex justify-content-center align-items-center flex-shrink-0">
            <img src={woman} className="img-logo" alt="important" />
          </div>

          <div className="woman-card__content flex-grow-1 mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
