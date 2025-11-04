import IconBoxCard from '../../components/cards/icon-box-card/IconBoxCard';

import circleCheck from '../../assets/images/icons/box-check.svg';
import pencil from '../../assets/images/icons/pencil.svg';

import "./tips.scss";
import FlatOffsetCard from '../../components/cards/flat-offset-card/FlatOffsetCard';

export default function Tips() {
  return (
    <div className="h-100">
      <div className="fp-tips__container">
        <div className="text-justify mt-4">
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={circleCheck}
          >
            <p>
              Acércate a la Oficina de Atención a la Familia del INR y despeja junto a ellos qué trámites podes realizar siendo familiar, y si no puedes escribe un correo electrónico a <a href="mailto:inr-pplatencionalfamiliar@minterior.gub.uy">inr-pplatencionalfamiliar@minterior.gub.uy</a>.
            </p>
          </IconBoxCard>
        </div>

        <div className="text-justify mt-1">
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

        <div className="text-justify mt-1">
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

      <div className="text-justify mt-1">
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

      <div className="text-justify mt-1">
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

      <div className="text-justify mt-1">
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

      <div className="text-justify mt-1">
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

      <div className="text-justify mt-5">
        <IconBoxCard
          bgColor="#47b2eb4f"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
          imgSrc={pencil}
        >
          <strong>Ser familiar es: </strong>"Cualquier persona que mantenga un lazo de parentezco que la haga relativa de la persona privada de libertad, ya sea consanguíneo, legal, por afinidad o por elección incluyendo quien posea un vínculo afectivo derivado de un trato frecuente y de confianza, sin límites temporales y ninguna forma de discriminación."
          <div>(CIDH, 2025, p.5)</div>
        </IconBoxCard>
      </div>

      <div className="mt-4">
        <div className="text-justify common-layout-margin">
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

      <div className="mt-4 mb-3 mt-3">
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

      <div className="mt-4">
        <FlatOffsetCard
          borderColor="#e9a15f"
          bgColor="#efcfb273"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
        >
          <div className="common-layout-margin text-justify">
            <p className="mb-3 mt-3">
              El encarcelamiento estigmatiza a las familias, empobrece y genera nuevas vulnerabilidades.
            </p>
          </div>
        </FlatOffsetCard>
      </div> 
    </div>
  );
}
