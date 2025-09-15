import check from '../../assets/images/check.svg'
import OffsetCard from '../../components/offset-card/OffsetCard';

import "./tips.scss";

import womanMegaphone from "../../assets/images/megaphone_woman.png";
import SpeakerWithBubble from '../../components/speaker-with-bubble/SpeakerWithBubble';
import MegaphoneSketch from '../../components/speaker-with-bubble/SpeakerWithBubble';
import SpeechBubble from '../../components/speaker-with-bubble/speech-bubble/SpeechBubble';

export default function Tips() {
  return (
    <div className="h-100">
      <div className="mx-3 p-0 pt-3 mt-3 fp-tips">
        <div className="mt-1">
          <div className="d-inline">
            <img src={check} className="logo react mr-5" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            <span className="logo react ml-5">
              Acércate a la Oficina de Atención a la Familia del INR y despeja junto a ellos que trámites podes realizar siendo familiar.
            </span>
          </p>
        </div>
        <div className="mt-3">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Llevá una libreta con vos para anotar la información importante.
          </p>
        </div>
        <div className="mt-3">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Te aconsejamos que de ser posible vayas acompañada/o.
          </p>
        </div>
        <div className="mt-3">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Asesorate antes de contratar un/a abogado/a y en caso de que lo hagas, tené en cuenta previamente las gestiones que podes realizar por ser familiar.
          </p>
        </div>
        <div className="mt-3">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Los familiares pueden solicitar las pertenencias de la persona detenida o se le entregan a la salida.
          </p>
        </div>
      </div>
      <div className="mx-3 p-0 pt-3 mt-3 fp-tips">
        <OffsetCard
          borderColor="#e9a15f"
          bgColor="#efcfb273"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
        >
          Si tu familiar toma alguna medicación regularmente,
          es importante que sea comunicado para la tramitación del ingreso de la misma.
        </OffsetCard>
      </div>
      al boceto, con piquito abajo inclinado a la derecha
<SpeechBubble text="TEXTO" maxWidth={420} fontSize={48} tailLean="right" />

// Piquito hacia la izquierda
<SpeechBubble
  text={"Mensaje con dos líneas\nque se adapta al ancho"}
  maxWidth={520}
  tailLean="left"
/>
      // básico, como el boceto
      <SpeechBubble text="TEXTO" maxWidth={420} fontSize={48} />

// piquito más fino, un poco a la derecha
      <SpeechBubble
        text={"Un globo que se adapta al largo del texto.\nEn dos líneas."}
        maxWidth={520}
        tailWidth={36}
        tailHeight={16}
        tailOffset={40}
        tailCurve={0.9}
      />

// limitar altura (tres líneas máximo aprox.)
      <SpeechBubble
        text={"Este texto es muy largo y debería cortarse con puntos suspensivos si sobrepasa el alto."}
        maxWidth={420}
        maxHeight={450}
      />


      {/* <MegaphoneSketch
  text={"TEXTO"}
  bubbleMaxWidth={520}
  bubbleX={760}
  bubbleY={60}
  bubbleSide="left"
  bubbleTailOffset={88}
  tailTipX={515}
  tailTipY={220}
  fontSize={42}
  lineHeight={1.1}
  strokeWidth={4}
  radius={22}
/> */}

    </div>
  );
}
