import check from '../../assets/images/icons/check.svg'
import InlineSpotlight from '../../components/inline-spotlight/InlineSpotlight';
import OffsetCard from '../../components/offset-card/OffsetCard';

import "./tips.scss";

export default function Tips() {
  return (
    <div className="h-100">
      <div className="mx-3 p-0 pt-3 mt-3 fp-tips text-font-size">
        <div className="mt-1 text-justify">
          <div style={{ "float": "left", "width": "clamp(calc(100% - 230px), min(calc(100% - 230px),70%), 70%)" }}>
            <div className="d-inline">
              <img src={check} className="logo react mr-5" alt="React logo" />
            </div>
            <p className="d-inline px-3 text-justify">
              <span className="logo react ml-5">
                Acércate a la Oficina de Atención a la Familia del INR y despeja junto a ellos que trámites podes realizar siendo familiar, y si no puedes escribe un correo electrónico.
              </span>
            </p>
          </div>
          <div className="" style={{ "float": "right", "width": "clamp(calc(175px), min(calc(175px),24%), 24%)", "fontSize": "6px !important" }} >
            <OffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
              className='offset-tramites'
            >
              <div>Traslados.</div>
              <div>Solicitudes vinculadas a la Salud.</div>
              <div>Redención de la pena.</div>
              <div>Solicitud cupos laborales y educativos.</div>
              <div>Denuncias.</div>
            </OffsetCard>
          </div>
        </div>
        <div style={{ "clear": "both" }} />
        <div className="mt-3 text-justify">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3 text-justify">
            Llevá una libreta con vos para anotar la información importante.
          </p>
        </div>
        <div className="mt-3 text-justify">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Te aconsejamos que de ser posible vayas acompañada/o.
          </p>
        </div>
        <div className="mt-3 text-justify">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Asesorate antes de contratar un/a abogado/a y en caso de que lo hagas, tené en cuenta previamente las gestiones que podes realizar por ser familiar.
          </p>
        </div>
        <div className="mt-3 text-justify">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Los familiares pueden solicitar las pertenencias de la persona detenida o se le entregan a la salida.
          </p>
        </div>
      </div>
      <div className="mx-3 p-0 pt-3 mt-3 fp-tips text-justify">
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
      <div className="mx-3 p-0 pt-3 mt-3 fp-tips text-justify">
        <InlineSpotlight bg="var(--brand-green-live)">Ser familiar es:</InlineSpotlight>
        <div className="font-italic">
          "Cualquier persona que mantenga un lazo de parentezco que la haga relativa de la persona privada de
          libertad, ya sea consanguíneo, legal, por afinidad o por elección incluyendo quien posea un vínculo afectivo
          derivado de un trato frecuente y de confianza, sin límites temporales y ninguna forma de discriminación."
        </div>
        <div>
          (CIDH, 2025, p.5)
        </div>
      </div>
      <div className="mx-3 p-0 pt-3 mt-3 fp-tips text-justify">
        {/* <strong>Oficina de atención a las familias</strong> */}

        <OffsetCard
          borderColor="var(--brand-green-live)"
          bgColor="#dfeae4"
          borderWidth={3}
          offsetX={7} offsetY={7}
          overhangX={7} overhangY={7}
        >
          <InlineSpotlight bg="var(--brand-green-live)">Oficina de atención a las familias</InlineSpotlight>

          <div>Clickea acá para ver los datos de contacto de la oficina.</div>
          <div>Llevar tu cédula es un requisito para realizar solicitudes.</div>
          <div>Desde el interior del país la solicitud se puede hacer vía mail.</div>

          <div>NO importa cuánto tiempo haya transcurrido desde la detención. ACÉRCATE o COMUNÍCATE</div>
        </OffsetCard>
      </div>

      <div className="d-none">
        Acá un título que especifique bien: Oficina de atención a las familias, mapa con ubicación, contacto, email,
        Llevar tu cédula es un requisito para realizar solicitudes. El horario de atención es de Lunes a viernes de 8 a 18 hs.
        Desde el Interior la solicitud se puede hacer vía Mail: poner el Mail

        Acá globito o cuadro que diga: NO importa cuánto tiempo haya transcurrido desde la detención. ACÉRCATE o COMUNÍCATE
      </div>

      <div style={{ "color": "red" }}>
        Globito: El encarcelamiento estigmatiza a las familias, empobrece y genera nuevas vulnerabilidades.

      </div>
    </div>
  );
}
