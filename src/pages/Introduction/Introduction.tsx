import InlineSpotlight from "../../components/inline-spotlight/InlineSpotlight";
import FpModal from "../../components/modal/FpModal";

import "./introduction.scss";

export default function Introduction() {
  return (
    <div className="h-100">
      <div className="mx-3 p-0 pt-3 text-font-size lh-base ">
        <p className="text-justify">Cuando una persona es encarcelada, su familia también transita la cárcel. </p>
        <p className="text-justify">Está guía está  pensada por y para familiares que acompañan este tránsito. </p>
        <p className="text-justify">Pretendiendo ser una herramienta útil para orientar, informar y contribuir para saber qué hacer, a dónde ir y cómo ayudar. </p>
        <p className="text-justify">Desde
          &nbsp;<InlineSpotlight bg="var(--brand-wine)">Familias Presentes</InlineSpotlight>&nbsp;
          creemos que para acompañar en el proceso que realiza nuestro familiar detenido, necesitamos acceder a la información, hacer que circule para generar las mejores garantías en el proceso.</p>
        <p className="text-justify">Realizamos esta guía: para compartir lo que aprendimos acompañando, para que no estés sola/o, para hacer valer nuestros derechos, porque el encarcelamiento también nos hace ser parte. </p>
      </div>
      <div className="mx-2 p-0 text-font-size lh-base">
        <FpModal title="Acompañar!" modalTitle="Acompañar">
          La palabra "acompañar" proviene del latín vulgar "companiare", que a su vez deriva de "cum panis" (con pan). Originalmente, significaba compartir el pan, es decir, estar con alguien y compartir un alimento básico, lo que implicaba cercanía y apoyo mutuo. Con el tiempo, el significado se extendió para abarcar la idea de estar con alguien en diferentes situaciones, no solo en la comida, sino también en el camino, en momentos importantes, ofreciendo compañía y apoyo.
          El origen en "cum panis" (con pan) es clave para entender el significado profundo de acompañar.
          <p className="color-red"></p>
        </FpModal>
      </div>
    </div>
  );
}
