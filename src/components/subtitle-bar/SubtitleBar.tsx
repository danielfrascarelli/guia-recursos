import "./styles.css" 

type SubtitleBarProps = {
  text: string;
  rightIcon?: string;
};

export default function SubtitleBar({ text }: SubtitleBarProps) {
  return (
    <div className="fp-subtitle-container">
      <h2 className="fp-subtitle">{text}</h2>
    </div>
  );
}
