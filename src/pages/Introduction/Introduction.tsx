import WomanBoxButton from "../../components/box-buttons/woman-box-button/WomanBoxButton";
// import FpModal from "../../components/modal/FpModal";

import "./introduction.scss";

export default function Introduction() {
  return (
    <div className="h-100">
      <div className="fp-introduction">
        <div className="common-layout-margin">
          <div className="mt-4 text-font-size lh-base text-justify">
            <p>Cuando una persona es encarcelada, su familia también transita la cárcel. </p>
            <p>Está guía está  pensada por y para familiares que acompañan este tránsito. </p>
            <p>Pretendiendo ser una herramienta útil para orientar, informar y contribuir para saber qué hacer, a dónde ir y cómo ayudar. </p>
            <p>Desde <strong>Familias Presentes</strong> creemos que para acompañar en el proceso que realiza nuestro familiar detenido, necesitamos acceder a la información, hacer que circule para generar las mejores garantías en el proceso.</p>
            <p>Realizamos esta guía: para compartir lo que aprendimos acompañando, para que no estés sola/o, para hacer valer nuestros derechos, porque el encarcelamiento también nos hace ser parte. </p>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <WomanBoxButton className="fp-introduction-woman-card">
              <p className="fp-introduction-woman-card-content text-justify">
                <a href="https://www.oas.org/es/cidh/informes/pdfs/2025/resolucion_ppl-es.pdf" target="_blank">
                  Entrá acá para ver el informe de la CIDH (02/2025) sobre derechos de familiares y afectos de personas privadas de libertad.
                </a>
              </p>
            </WomanBoxButton>
          </div>
        </div>
      </div>
    </div>
  );
}

