import './woman-box-button.scss';
import type { WomanBoxButtonProps } from './WomanBoxButtonProps';

import boy from '../../../assets/images/people/woman.svg';

export default function WomanBoxButton({
  className = '',
  children,
}: WomanBoxButtonProps) {
  return (
    <div className={`woman-box-button__container`}>
      <div className={`woman-box-button ${className}`}>
        <div className='d-flex flex-row align-items-center gap-3'>
          <div className='d-flex justify-content-center align-items-center flex-shrink-0'>
            <img src={boy} className='img-logo' alt='important' />
          </div>
          <div className='woman-box-button__content flex-grow-1 mb-0'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
