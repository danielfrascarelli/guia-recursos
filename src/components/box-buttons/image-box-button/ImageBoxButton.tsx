import './image-box-button.scss';
import type { ImageBoxButtonProps } from './ImageBoxButtonProps';

export default function ImageBoxButton({
  className = "",
  children,
  srcImg
}: ImageBoxButtonProps) {

  return (
    <div className={`image-box-button__container`} >
      <div className={`image-box-button ${className}`} >
        <div className="d-flex flex-row align-items-center gap-3">
          <div className="d-flex justify-content-center align-items-center flex-shrink-0">
            <img src={srcImg} className="img-logo" alt="important" />
          </div> 
          <div className="image-box-button__content flex-grow-1 mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
