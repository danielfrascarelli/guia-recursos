import './image-box-button.scss';
import type { ImageBoxButtonProps } from './ImageBoxButtonProps';

export default function ImageBoxButton({
  className = "", 
  onClick,
  srcImg,
  label
}: ImageBoxButtonProps) {

  return (
    <div className={`image-box-button__container`} onClick={onClick}>
      <div className={`image-box-button ${className}`} >
        <div className="d-flex flex-row flex-grow-1 align-items-center gap-3">
          <div className="d-flex justify-content-center align-items-center flex-shrink-0 image-box-button-img-logo__container">
            <img src={srcImg} className="image-box-button-img-logo" alt="important" />
          </div>
          <div className="d-flex flex-row justify-content-center image-box-button__content flex-grow-1 mb-0">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
