import "./styles.scss" 
 
type TitleDescriptionBarProps = {
  text: string; 
};

export default function TitleDescriptionBar({ text }: TitleDescriptionBarProps) {
  return ( 
    <div className="fp-title-description-bar__container">
      <div className="fp-title-description-bar">
        <h1 className="fp-title-description__title">{text}</h1>
      </div>
    </div>
  );
}
