import IconBoxCard from '../../components/cards/icon-box-card/IconBoxCard';

import circleCheck from '../../assets/images/icons/box-check.svg';
import pencil from '../../assets/images/icons/pencil.svg';

import "./tips.scss";
import FlatOffsetCard from '../../components/cards/flat-offset-card/FlatOffsetCard';

export default function Tips() {
  return (
    <div className="h-100 text-justify">
      <div className="fp-tips__container text-justify">
        <div className="text-justify mt-4 common-layout-margin-only-desktop">
          <IconBoxCard
            bgColor="transparent"
            imgSrc={circleCheck}
          >
            <p>
              Acércate a la
              <a href="/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion/oficinas/1" target='_blank'>
                &nbsp;Oficina de Atención a la Familia&nbsp;
              </a>
              del INR y despeja junto a ellos qué trámites podes realizar siendo familiar, y si no puedes escribe un correo electrónico a <a href="mailto:inr-pplatencionalfamiliar@minterior.gub.uy">inr-pplatencionalfamiliar@minterior.gub.uy</a>.
            </p>
          </IconBoxCard>
        </div>

        <div className="text-justify mt-1 common-layout-margin-only-desktop">
          <IconBoxCard
            borderColor="transparent"
            bgColor="#47b2eb4f"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            className="tips-tramites-inline-list"
            imgSrc={pencil}
          >
            <ul>
              <li>Traslados</li>
              <li>Solicitudes vinculadas a la Salud</li>
              <li>Redención de la pena</li>
              <li>Solicitud cupos laborales y educativos</li>
              <li>Denuncias</li>
            </ul>
          </IconBoxCard>
        </div>

        <div className="text-justify mt-1 common-layout-margin-only-desktop">
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={circleCheck}
          >
            <p>
              Para realizar solicitudes ante la oficina, necesitas realizar una solicitud, aqui te la dejamos: 
              <a href="https://familiaspresentes.uy/guia-docs/Prototipo para solicitudes en oficina de atención a la familia.pdf" target="_blank">
                &nbsp;Prototipo para solicitudes en oficina de atención a la familia
              </a>
            </p>
          </IconBoxCard>
        </div>        

        <div className="text-justify mt-1 common-layout-margin-only-desktop">
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={circleCheck}
          >
            <p>
              Llevá una libreta con vos para anotar la información importante.
            </p>
          </IconBoxCard>
        </div>

      </div>

      <div className="text-justify mt-1 common-layout-margin-only-desktop">
        <IconBoxCard
          bgColor="transparent"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
          imgSrc={circleCheck}
        >
          <p>
            Te aconsejamos que de ser posible vayas acompañada/o.
          </p>
        </IconBoxCard>
      </div>

      <div className="text-justify mt-1 common-layout-margin-only-desktop">
        <IconBoxCard
          bgColor="transparent"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
          imgSrc={circleCheck}
        >
          <p>
            Asesorate antes de contratar un/a abogado/a y en caso de que lo hagas, tené en cuenta previamente las gestiones que podes realizar por ser familiar.
          </p>
        </IconBoxCard>
      </div>

      <div className="text-justify mt-1 common-layout-margin-only-desktop">
        <IconBoxCard
          bgColor="transparent"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
          imgSrc={circleCheck}
        >
          <p>
            Los familiares pueden solicitar las pertenencias de la persona detenida o se le entregan a la salida.
          </p>
        </IconBoxCard>
      </div>

      <div className="text-justify mt-1 common-layout-margin-only-desktop">
        <IconBoxCard
          bgColor="#efcfb273"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
        >
          Si tu familiar toma alguna medicación regularmente,
          es importante que sea comunicado para la tramitación del ingreso de la misma.
        </IconBoxCard>
      </div>

      <div className="text-justify mt-4 common-layout-margin-only-desktop">
        <IconBoxCard
          bgColor="#47b2eb4f"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
          imgSrc={pencil}
        >
          <p className="mt-3">
            Desde Familias Presentes consideramos que ser familiar es, ser una persona que elige acompañar a una persona detenida, puede o no tener un vínculo de parentesco, ya sea por mantener un lazo sanguíneo, por relación legal o por afinidad. También incluimos a quienes mantienen una relación afectiva basada en la convivencia, la confianza o el trato continuo, sin restricciones de tiempo ni ningún tipo de discriminación. (CIDH, 2025)
          </p>
        </IconBoxCard>
      </div>
      <div className="mt-4 common-layout-margin">
        <div className="text-justify">
          <strong>
            <p>
              Atención a las familias:
            </p>
          </strong>
          <p>
            <a href="/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion/oficinas/1" target='_blank'>
              Hacé click acá para ver los datos de contacto de la Oficina de atención a las familias.
            </a>
          </p>
          <p>
            Llevar tu cédula es un requisito para realizar solicitudes.
            El horario de atención es de Lunes a viernes de 8 a 18 hs.
          </p>
          <p>
            Podes realizar las solicitudes enviando un mail a: &nbsp;
            <a href="mailto:inr-pplatencionalfamiliar@minterior.gub.uy" target='_blank'>
              inr-pplatencionalfamiliar@minterior.gub.uy
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4 mb-3 mt-3 common-layout-margin-only-desktop">
        <IconBoxCard
          bgColor="#efcfb273"
          borderWidth={3}
        >
          <div className="text-justify mb-3 mt-3">
            <div>NO importa cuánto tiempo haya transcurrido desde la detención. </div>
            <div>ACÉRCATE o COMUNÍCATE</div>
          </div>
        </IconBoxCard>
      </div>

      <div className="mt-4 common-layout-margin-only-desktop">
        <FlatOffsetCard
          borderColor="#e9a15f"
          bgColor="#efcfb273"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
        >
          <div className="text-justify mx-4 px-4 common-layout-margin-only-not-desktop">
              El encarcelamiento estigmatiza a las familias, empobrece y genera nuevas vulnerabilidades.
          </div>
        </FlatOffsetCard>
      </div>
    </div>
  );
}
