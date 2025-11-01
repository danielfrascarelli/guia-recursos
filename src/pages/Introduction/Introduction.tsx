import WomanBoxButton from "../../components/box-buttons/woman-box-button/WomanBoxButton";

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

          <div className="mt-4 mb-4 fp-tips float-clean">
            <WomanBoxButton className="fp-introduction-woman-card">
              <p className="text-justify">
                <a href="https://rimuf.org/wp-content/uploads/2023/03/Version-oficial-Espanol-Principios-de-Bogota-Bogota-Colombia-2023-.docx.pdf" target="_blank">
                  Acompañar!
                </a>
              </p>
            </WomanBoxButton>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <div className="mx-2 p-0 text-font-size lh-base">
        <FpModal title="Acompañar!" modalTitle="Acompañar">
          La palabra "acompañar" proviene del latín vulgar "companiare", que a su vez deriva de "cum panis" (con pan). Originalmente, significaba compartir el pan, es decir, estar con alguien y compartir un alimento básico, lo que implicaba cercanía y apoyo mutuo. Con el tiempo, el significado se extendió para abarcar la idea de estar con alguien en diferentes situaciones, no solo en la comida, sino también en el camino, en momentos importantes, ofreciendo compañía y apoyo.
          El origen en "cum panis" (con pan) es clave para entender el significado profundo de acompañar.
          <p className="color-red"></p>
        </FpModal>
      </div> */}