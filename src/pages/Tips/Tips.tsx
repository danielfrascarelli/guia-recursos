import check from '../../assets/images/check.svg'
import OffsetCard from '../../components/offset-card/OffsetCard';

import "./tips.scss"; 

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
    </div>
  );
}
