import WomanBoxButton from '../../components/box-buttons/woman-box-button/WomanBoxButton';
import FpModal from '../../components/modal/FpModal';
// import FpModal from "../../components/modal/FpModal";

import './introduction.scss';

export default function Introduction() {
  return (
    <div className='h-100'>
      <div className='fp-introduction'>
        <div className='common-layout-margin'>
          <div className='mt-4 text-font-size lh-base text-justify'>
            <p>
              Cuando una persona es encarcelada, su familia también transita la
              cárcel.{' '}
            </p>
            <p>
              Está guía está pensada por y para familiares que acompañan este
              tránsito.{' '}
            </p>
            <p>
              Pretendiendo ser una herramienta útil para orientar, informar y
              contribuir para saber qué hacer, a dónde ir y cómo ayudar.{' '}
            </p>
            <p>
              Desde <strong>Familias Presentes</strong> creemos que para
              acompañar en el proceso que realiza nuestro familiar detenido,
              necesitamos acceder a la información, hacer que circule para
              generar las mejores garantías en el proceso.
            </p>
            <p>
              Realizamos esta guía: para compartir lo que aprendimos
              acompañando, para que no estés sola/o, para hacer valer nuestros
              derechos, porque el encarcelamiento también nos hace ser parte.{' '}
            </p>
          </div>
        </div>

        <div className='common-layout-margin d-block'>
          <FpModal title='Acompañar!' modalTitle='Acompañar'>
            <div className='text-justify'>
              <p>
                La palabra <strong>"acompañar"</strong> proviene del latín
                vulgar "companiare", que a su vez deriva de "cum panis" (con
                pan). Originalmente, significaba compartir el pan, es decir,
                estar con alguien y compartir un alimento básico, lo que
                implicaba cercanía y apoyo mutuo.
              </p>
              Con el tiempo, el significado se extendió para abarcar la idea de
              estar con alguien en diferentes situaciones, no solo en la comida,
              sino también en el camino, en momentos importantes, ofreciendo
              compañía y apoyo. El origen en "cum panis" (con pan) es clave para
              entender el significado profundo de acompañar.
            </div>
          </FpModal>
        </div>

        <div className='mt-4 common-layout-margin'>
          <WomanBoxButton className='fp-introduction-woman-card woman-cidh'>
            <p className='fp-introduction-woman-card-content text-justify'>
              <a
                href='https://www.oas.org/es/cidh/informes/pdfs/2025/resolucion_ppl-es.pdf'
                target='_blank'
              >
                Entrá acá para ver el informe de la CIDH (02/2025) sobre
                derechos de familiares y afectos de personas privadas de
                libertad.
              </a>
            </p>
          </WomanBoxButton>
        </div>
      </div>
    </div>
  );
}
