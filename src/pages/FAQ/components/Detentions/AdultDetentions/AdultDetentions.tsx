import InlineSpotlight from "../../../../../components/inline-spotlight/InlineSpotlight";
import OffsetCard from "../../../../../components/cards/offset-card/OffsetCard";
import TitleBar from "../../../../../components/title-bar/TitleBar";


export interface AdultFaqIntroProps {
};

export default function AdultFaqIntro({ }: AdultFaqIntroProps) {

  return (
    <div className="h-100">
      <TitleBar title={"Detenciones en adultos"} />
      <div className="fp-tips__container common-layout-margin mt-4">
        <div  >
          <div className="fp-family-role text-justify">
            <p>Si tu familiar es <InlineSpotlight bg="var(--brand-wine)">ADULTO</InlineSpotlight> tenes que saber:</p>
            <ul>
              <li>La persona detenida puede permanecer en la Seccional por un máximo de 24 horas. Pasado este plazo se debe haber tomado contacto con Fiscalía y ser presentado ante un Juez. Considera que el tiempo de espera para ver al/la Juez/a puede ser de hasta 24 horas. </li>
              <li>Los/as abogados/as defensores/as necesitan de la colaboración de las familias durante el proceso, por eso es importante que estés en los primeros momentos de la detención. Podes acercarte a hablar con el/la defensor/a para tener mayor información y así saber cómo ayudar y acompañar. </li>
              <li>Para hablar con el/la abogado/a defensor/a, podes acercarte a la OPEC (Oficina Penal Centralizada).
                <ul>
                  <li>En el Área Metropolitana de Montevideo el/la abogado/a litigante es quién acompañará a la persona detenida hasta que se decrete la resolución judicial.</li>
                  <li>Esta oficina funciona en dos turnos, se le denominan Primer y Segundo turno y atienden  en el horario de 10 a 15 hs. Los de Tercer y Cuarto turno, atienden desde las 16  a 20 hs. </li>
                  <li>Lista de abogados litigantes, se organiza por turnos. Poner lista para pinchar y entrar.</li>
                </ul>
              </li>
            </ul>
            <OffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              Dependiendo la hora que se coordina la audiencia, será el Turno que se le adjudique a la persona esperando procesamiento.
            </OffsetCard>
            <ul>
              <li>En el interior del país tenes que dirigirte directamente a la Defensoría Pública del departamento para tomar contacto con el/la abogado/a defensor/a.</li>
              <li>En el interior, el abogado acompaña a la persona durante todo el proceso, desde la detención hasta su salida.</li>
              <li>En Montevideo y Canelones, cuando la persona tiene una pena efectiva, es asistida por un/a abogado/a de ejecución penal.  (aca Acceso a la lista, que se encuentra por orden alfabético y corresponde por apellido)</li>
            </ul>
            <OffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              Ahora es importante mantener la calma porque van a transcurrir algunos días sin tener comunicación con tu familiar.
            </OffsetCard>
            <ul>
              <li>Si es varón y se encuentra dentro del Área Metropolitana de Montevideo, será derivado al Centro de Estudios, Diagnóstico y Derivación de INR.</li>
              <li>En el interior generalmente ingresan en la Unidad del Departamento y no reciben evaluación. Al igual que las mujeres en todo el país. </li>
            </ul>
            <OffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              Sugerimos que te comuniques con el abogado/a defensor/a.
            </OffsetCard>
          </div>
        </div>
      </div>
    </div>
  );
}
