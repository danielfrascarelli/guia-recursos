import check from '../../assets/images/check.svg'

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
            <span className="logo react ml-5">De ser posible recurras a hacer las averiguaciones correspondientes acompañada.</span>
          </p>
        </div>
        <div className="mt-5">
          <div className="d-inline">
            <img src={check} className="logo react" alt="React logo" />
          </div>
          <p className="d-inline px-3">
            Llevar con vos una libreta dónde puedas ir registrando información importante.
          </p>
        </div>
      </div>
    </div>
  );
}
