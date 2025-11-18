import { useNavigate } from "react-router-dom";

import familias_presentes from '../../assets/images/logos/familias_presentes.svg';
import europe from '../../assets/images/logos/europe.svg'
import inr from '../../assets/images/logos_contactos_utiles/inr.svg'

import acceso from '../../assets/images/menu/acceso.svg';
import esposas from '../../assets/images/esposas.svg';
import salida from '../../assets/images/menu/salida.svg';
import salud from '../../assets/images/menu/salud.svg';
import sancion from '../../assets/images/menu/sancion.svg';
import traslados from '../../assets/images/menu/traslados.svg';
import visitas from '../../assets/images/menu/visitas.svg';
import edificioJusticia from '../../assets/images/justicia.svg';
import martilloJuez from '../../assets/images/martillo-juez.svg';
import telefonoVideollamada from '../../assets/images/videollamada.svg';
import adult from '../../assets/images/people/adult.svg';
import teenager from '../../assets/images/people/teenager.svg';
import check from '../../assets/images/icons/box-check.svg';
import logo_inr from "../../assets/images/logos_contactos_utiles/inr.svg"
import asse from "../../assets/images/logos_contactos_utiles/asse.png";
import pnec from "../../assets/images/logos_contactos_utiles/pnec.png";
import dinali from "../../assets/images/logos_contactos_utiles/dinali.png";
import comisionado_parlamentario from "../../assets/images/logos_contactos_utiles/comisionado.parlamentario.png";
import inddhh from "../../assets/images/logos_contactos_utiles/inddhh.png";
import child from "../../assets/images/people/child.svg";
import pencil from '../../assets/images/icons/pencil.svg';

import "./home.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const onNext = () => navigate("/introduccion");
  const onSkipIntro = () => navigate("/mapa-de-ruta");

  return (
    <main className="min-vh-100 d-flex align-items-stretch bg--brand-bg-light fp-home">
      <div className="container my-3 d-flex flex-column justify-content-between">
        <header>
          <div className="text-center mt-4">
            <img
              src={familias_presentes}
              alt="Familias Presentes"
              title="Familias Presentes"
              className="img-fluid"
              style={{ height: 100 }}
              onClick={() => { window.open('https://familiaspresentes.uy', '_blank', 'noopener,noreferrer'); }}
            />
          </div>
        </header>

        <section className="fp-home-title-container">
          <h1 className="fw-bold color--brand-dark fp-home-title mt-33vh lh-base">
            Guía para el acompañamiento
          </h1>
        </section>

        <section>
          <h2 className="mx-1 mx-md-5 text-center  lh-base">
            Esta guía es para quienes estamos afuera, acompañando y sosteniendo los procesos de encarcelamiento.
          </h2>
        </section>

        <section className="mb-4">
          <div className="fp-home-cta-wrap">
            <button onClick={onNext} className="fp-home-cta"            >
              Comenzar
            </button>
          </div>

          <div className="text-center mt-3">
            <button
              type="button"
              onClick={onSkipIntro}
              className="btn btn-link text-secondary text-decoration-none p-0"
            >
              Saltar intro <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
            </button>
          </div>
        </section>
        <footer className="d-flex justify-content-center align-items-end gap-3 pb-3">
          <div className="text-left">
            <small className="d-block text-secondary mb-1">Financia:</small>
            <img
              src={europe}
              alt="Unión Europea"
              title="Unión Europea"
              className="img-fluid"
              style={{ height: 40 }}
            />
          </div>
          <div className="text-left">
            <small className="d-block text-secondary mb-1">Apoya:</small>
            <img
              src={inr}
              alt="Instituto Nacional de Rehabilitació"
              title="Instituto Nacional de Rehabilitación"
              className="img-fluid"
              style={{ height: 40 }}
            />
          </div>
        </footer>
      </div>

      <img src={acceso} className="d-none" />
      <img src={esposas} className="d-none" />
      <img src={salida} className="d-none" />
      <img src={salud} className="d-none" />
      <img src={sancion} className="d-none" />
      <img src={traslados} className="d-none" />
      <img src={visitas} className="d-none" />
      <img src={edificioJusticia} className="d-none" />
      <img src={martilloJuez} className="d-none" />
      <img src={telefonoVideollamada} className="d-none" />
      <img src={adult} className="d-none" />
      <img src={teenager} className="d-none" />
      <img src={check} className="d-none" />
      <img src={logo_inr} className="d-none" />
      <img src={asse} className="d-none" />
      <img src={pnec} className="d-none" />
      <img src={dinali} className="d-none" />
      <img src={comisionado_parlamentario} className="d-none" />
      <img src={inddhh} className="d-none" />
      <img src={child} className="d-none" />
      <img src={pencil} className="d-none" />
    </main>
  );
}