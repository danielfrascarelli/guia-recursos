import BackButton from "../../../../../components/back-button/BackButton";
import FlatOffsetCard from "../../../../../components/cards/flat-offset-card/FlatOffsetCard";
import InlineSpotlight from "../../../../../components/inline-spotlight/InlineSpotlight";
import TitleBar from "../../../../../components/title-bar/TitleBar";

export interface TeenagerDetentionsProps {
};

export default function TeenagerDetentions({ }: TeenagerDetentionsProps) {

  return (
    <div className="h-100">
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Detenciones en adolescentes"} />
      </div>
      <div className="fp-tips__container">
        <div>
          <div className="common-layout-margin text-justify mt-4">
            <p>Si tu familiar es <InlineSpotlight bg="var(--brand-wine)">ADOLESCENTE</InlineSpotlight> tenes que saber:</p>
            <ul>
              <li>El/la adolescente detenido/a debe tener derecho a comunicarse con sus familiares, también tener un Abogado/a que le acompañe, las comunicaciones no pueden verse afectadas en ningún momento del proceso.</li>
              <li>El/a adolescente tiene derecho al acceso en Salud durante las primeras horas de detención, la constatación de lesiones y la revisión médica general, es garantía para todas las partes.</li>
              <li>En caso de encontrarse bajo los efectos de alguna sustancia psicoactiva, se debe considerar que el/ la adolescente no está en condiciones de declarar.</li>
              <li>Debe asegurarse que un referente adulto esté al tanto de la situación del/de la adolescente.</li>
              <li>El tiempo en la seccional no puede superar las 2 horas. Luego debe ser visto por la Fiscalía.</li>
              <li>Durante las primeras 24 horas después de la detención en la zona metropolitana, el/la adolescente permanece en el Centro de Ingreso Transitorio (CIT), mientras se espera qué pasos se van a seguir.</li>
              <li>Existen tres centros de ingreso en relación a la edad: Para mayores de 15 años, otro para menores de entre 13 y 14 años y uno para adolescentes mujeres.</li>
              <li>Fuera del Área Metropolitana de Montevideo, se los/as traslada a un Centro de INAU del departamento donde fue detenido/a.</li>
              <li>Los centros de Privación de Libertad se encuentran casi en su totalidad dentro de Montevideo y área metropolitana, lo cual afecta el acompañamiento de las familias/ referencias afectivas cuando son provenientes del Interior del País.</li>
            </ul>
          </div>
          <div className="common-layout-margin text-justify mt-4">
            <div><strong>Sabías que…?</strong></div>
            <div className="pt-2">
              <p>
                En nuestro País, hay aproximadamente 350 adolescentes cumpliendo medidas en contextos de encierro/ Privación de Libertad, dentro del Sistema Penal Juvenil.
              </p>
              <p>
                Existen a su vez, Medidas no Privativas de Libertad donde el/la juez/a determina el tipo de sanción y acompañamiento,  las mismas Deben de ser SOCIOEDUCATIVAS, en este tipo de medidas, se realiza un proceso con el/la adolescente involucrado/a, si la medida no se cumple, la sanción se convierte en Privativa de Libertad.
              </p>
              <p>
                Otro dato a considerar en este tipo de Medidas no Privativas de Libertad, es que dependiendo de la zona del País donde se encuentren, el seguimiento se dará a través de INAU y/o Organizaciones de la Sociedad Civil.
              </p>
              <p>
                Aunque las familias enfrentan desafíos similares a los del Sistema Penal de Adultos/as se visualizan otro tipo de respuestas por parte de las Instituciones.
              </p>
            </div>
          </div>
          <div className="common-layout-margin-only-desktop text-justify mt-4">
            <div className="mt-2">
              <FlatOffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="mx-xl-4 my-2 common-layout-margin-only-not-desktop">
                  Recorda que si tu familiar adolescente no cumple con las medidas No privativas de libertad dispuestas por el Juez/a y llevadas adelante a través de un Equipo que desempeña la propuesta SOCIOEDUCATIVA, puede ser sancionado con una medida PRIVATIVA de Libertad.
                </div>
              </FlatOffsetCard>
            </div>
          </div>
          <div className="common-layout-margin text-justify mt-4">
            <div><strong>Derecho a la comunicación de los /as familiares con los/as adolescentes</strong></div>
            <div className="pt-2">
              <ul>
                <li>Se realizan entrevistas a las familias/referencias afectivas y al/la adolescente al momento del ingreso, donde se les informa los días de visitas establecidos y se coordina con los familiares otras posibles gestiones o contemplaciones específicas.</li>
                <li>En las situaciones en que no se identifican referencias familiares de cuidado, se consulta al/la adolescente otros posibles adultos/as que acompañen, evaluando si estas son figuras de protección y así posteriormente habilitar las visitas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
