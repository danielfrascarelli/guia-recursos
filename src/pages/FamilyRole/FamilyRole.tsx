import "./family-role.scss";

import child from "../../assets/images/people/child.png";
import FlatOffsetCard from "../../components/cards/flat-offset-card/FlatOffsetCard";
import IconBoxCard from "../../components/cards/icon-box-card/IconBoxCard";
import WomanBoxButton from "../../components/box-buttons/woman-box-button/WomanBoxButton";

export default function FamilyRole() {
  return (
    <div className="h-100">
      <div className="fp-family-role">
        <div className="common-layout-margin mt-4">
          <strong>
            <p>
              ¿Quienes acompañamos los procesos de encarcelamiento?
            </p>
          </strong>
          <p className="text-justify">
            En su mayoría somos las familiares mujeres, parejas, madres, hermanas quienes asumimos los costos de estos procesos tan complejos, que nos obligan a afrontar los cuidados del adentro y del afuera.
          </p>
          <p className="text-justify">
            <strong>Acompañamos</strong> porque somos agentes de prevención de la tortura. Somos la voz de quién se encuentra cumpliendo una pena, somos la garantía de que se mejoren las condiciones y se respeten los Derechos Humanos.
          </p>
          <p className="text-justify">
            <strong>Sostenemos</strong> porque sabemos que la vida continua afuera, porque la vida continúa luego, porque la vida para ser transformada necesita de esperanza y dignidad.
          </p>
        </div>
        <div className="mt-4 mb-4 fp-tips float-clean">
          <FlatOffsetCard
            borderColor="#e9a15f"
            bgColor="#efcfb273"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
          >
            <div className="common-layout-margin">
              <img src={child} className="child-image" alt="child logo" />
              <p className="text-justify">
                Tenes que saber que si tu familiar detenido tiene infancias o adolescencias a su cargo,
                seguramente seas la persona que deberá brindar protección a los mismos.
              </p>
              <p className="text-justify">
                Si no podes, lo mejor es aconsejar a la persona detenida que identifique
                referentes protectores y de esta manera dar garantías a los derechos de
                los/as niños, niñas y adolescentes (NNA).
              </p>
            </div>
          </FlatOffsetCard>
        </div>
        <div className="mt-4 mb-4 fp-tips float-clean">
          <WomanBoxButton className="family-role-woman-card">
            <p className="text-justify">
              <a href="https://rimuf.org/wp-content/uploads/2023/03/Version-oficial-Espanol-Principios-de-Bogota-Bogota-Colombia-2023-.docx.pdf" target="_blank">
                Si queres saber más acerca de Los principios de Bogota, pincha acá
                </a>
            </p>
          </WomanBoxButton>
        </div>

        {/* <div className="mx-2 p-0 mt-4 text-font-size lh-base">
          <FpModal title="Si queres saber más acerca de Los principios de Bogota, pincha acá" onClick={() => { window.open('https://rimuf.org/wp-content/uploads/2023/03/Version-oficial-Espanol-Principios-de-Bogota-Bogota-Colombia-2023-.docx.pdf', '_blank', 'noopener,noreferrer'); }} />
        </div> */}
        <div className="mt-4 mb-4 fp-tips float-clean">
          <IconBoxCard
            borderColor="#e9a15f"
            bgColor="#efcfb273"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
          >
            <p className="text-justify">
              Si tu familiar es una mujer, está detenida y embarazada o
              tiene hijos/as pequeños. Tiene derecho a ser trasladada a una unidad para
              madres con hijos/as, donde pueden ingresar los niños y niñas de 0 a 3 años.
            </p>
          </IconBoxCard>
        </div>
      </div>
    </div>
  );
}