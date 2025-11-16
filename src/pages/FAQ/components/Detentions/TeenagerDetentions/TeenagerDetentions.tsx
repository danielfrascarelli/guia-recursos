import BackButton from "../../../../../components/back-button/BackButton";
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
      <div className="fp-tips__container common-layout-margin text-justify mt-4">
        <div>
          <div>
            <p>Si tu familiar es <InlineSpotlight bg="var(--brand-wine)">ADOLESCENTE</InlineSpotlight> tenes que saber:</p>
            <ul>
              <li>El/la adolescente detenido/a debe tener derecho a comunicarse con sus familiares y su abogado/a.  </li>
              <li>Debe asegurarse que un referente adulto esté al tanto de la situación del/de la adolescente.</li>
              <li>El tiempo en la seccional no puede superar las 2 horas. Luego debe ser visto por la Fiscalía.</li>
              <li>Durante las primeras 24 horas después de la detención en la zona metropolitana, el/la adolescente permanece en el Centro de Ingreso Transitorio (CIT), mientras se espera qué pasos se van a seguir.</li>
              <li>Existen tres centros de ingreso en relación a la edad: Para mayores de 15 años, otro para menores de entre 13 y 14 años y uno para adolescentes mujeres.</li>
              <li>Fuera del Área Metropolitana de Montevideo, se los/as traslada a un Centro de INAU del departamento donde fue detenido/a.</li>
              <li>Es importante agregar qué los centros de detención son en Montevideo. Esto surgió hoy de la entrevista. </li>
            </ul>
          </div>
          <div className="pt-2">
            <div><strong>Sabías que…?</strong></div>
            <div className="pt-2">
              <p>
                En nuestro País, hay aproximadamente 350 adolescentes cumpliendo medidas en contextos de encierro/ Privación de Libertad,  dentro del Sistema Penal Juvenil.
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
          <div className="pt-2">
            <div><strong>Derecho a la comunicación de los /as familiares con los/as adolescentes</strong></div>
            <div className="pt-2">
              <ul>
                <li>Se realizan entrevistas a la familia y al adolescente al momento del ingreso, donde se les informa los días de visitas establecidos y se coordina con los familiares otras posibles gestiones o contemplaciones específicas.</li>
                <li>Los familiares pueden comunicarse con la Dirección del Centro para coordinar visitas y recibir información.</li>
                <li>En situaciones en que no existe familiar presente, se autoriza un referente adulto con quien el/la adolescente tenga un vínculo significativo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
