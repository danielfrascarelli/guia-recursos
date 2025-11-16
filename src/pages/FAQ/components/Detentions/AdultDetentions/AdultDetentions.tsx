import InlineSpotlight from "../../../../../components/inline-spotlight/InlineSpotlight";
import TitleBar from "../../../../../components/title-bar/TitleBar";
import BackButton from "../../../../../components/back-button/BackButton";
import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";

import pencil from '../../../../../assets/images/icons/pencil.svg';

export interface AdultFaqIntroProps {
};

export default function AdultFaqIntro({ }: AdultFaqIntroProps) {

  return (
    <div className="h-100">
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Detenciones en adultos"} />
      </div>
      <div className="fp-tips__container mt-4">
        <div>
          <div className="fp-family-role text-justify">
            <div className="common-layout-margin mt-4">
              <p>Si tu familiar es <InlineSpotlight bg="var(--brand-wine)">ADULTO</InlineSpotlight> tenes que saber:</p>
              <ul>
                <li>La persona detenida puede permanecer en la Seccional por un máximo de 24 horas. Pasado este plazo se debe haber tomado contacto con Fiscalía y ser presentado ante un Juez. Considera que el tiempo de espera para ver al/la Juez/a puede ser de hasta 24 horas.</li>
                <li>Los/as abogados/as defensores/as necesitan de la colaboración de las familias durante el proceso, por eso es importante que estés en los primeros momentos de la detención. Podes acercarte a hablar con el/la defensor/a para tener mayor información y así saber cómo ayudar y acompañar.</li>
                <li>Si estas en Montevideo, para hablar con el/la Abogado/a Defensor/a, podes acercarte a la OPEC (Oficina Penal Centralizada).
                  <ul>
                    <li>En el Área Metropolitana de Montevideo el/la <strong>abogado/a litigante</strong> es quién acompañará a la persona detenida hasta que se decrete la resolución judicial.</li>
                    <li>Esta oficina funciona en dos turnos, se le denominan Primer y Segundo turno y atienden  en el horario de 10 a 15 hs. Los de Tercer y Cuarto turno, atienden desde las 16  a 20 hs.</li>
                    <li>Lista de abogados litigantes, se organiza por turnos.
                      <a href="https://familiaspresentes.uy/guia-docs/Lista de abogados de oficio.pdf" target="_blank">
                        &nbsp;Pincha acá para ver la lista.
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>Si tu familiar está en un lugar del Interior del País, debes de tener clara esta información:
                  <a href="https://www.poderjudicial.gub.uy/contenido/item/1434-defensorias-publicas.html" target="_blank">
                    &nbsp;pincha aquí para acceder al contacto con la Defensoría
                  </a>
                  .</li>
              </ul>
            </div>
            <div className="mt-3">
              <IconBoxCard
                borderColor="transparent"
                bgColor="#47b2eb4f"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
                imgSrc={pencil}
              >
                Dependiendo la hora que se coordina la audiencia, será el Turno que se le adjudique a la persona esperando procesamiento.
              </IconBoxCard>
            </div>
            <div className="common-layout-margin mt-3">
              <ul>
                <li>En el interior del país tenes que dirigirte directamente a la Defensoría Pública del departamento para tomar contacto con el/la abogado/a defensor/a.</li>
                <li>En el interior, el abogado acompaña a la persona durante todo el proceso, desde la detención hasta su salida.</li>
                <li>En Montevideo y Canelones, cuando la persona tiene una pena efectiva, es asistida por un/a abogado/a de ejecución penal.  (aca Acceso a la lista, que se encuentra por orden alfabético y corresponde por apellido)</li>
              </ul>
            </div>
            <div className="mt-3">
              <IconBoxCard
                borderColor="transparent"
                bgColor="#47b2eb4f"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
                imgSrc={pencil}
              >
                Ahora es importante mantener la calma porque van a transcurrir algunos días sin tener comunicación con tu familiar.
              </IconBoxCard>
            </div>
            <div className="common-layout-margin mt-3">
              <ul>
                <li>Si es varón y se encuentra dentro del Área Metropolitana de Montevideo, será derivado al Centro de Estudios, Diagnóstico y Derivación de INR.</li>
                <li>En el interior generalmente ingresan en la Unidad del Departamento y no reciben evaluación. Al igual que las mujeres en todo el país. </li>
              </ul>
            </div>
            <div className="mt-3">
              <IconBoxCard
                borderColor="transparent"
                bgColor="#47b2eb4f"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
                imgSrc={pencil}
              >
                Sugerimos que te comuniques con el abogado/a defensor/a.
              </IconBoxCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
