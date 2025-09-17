import InlineSpotlight from "../../components/inline-spotlight/InlineSpotlight";
import FpModal from "../../components/modal/FpModal";
import OffsetCard from "../../components/offset-card/OffsetCard";
import "./family-role.scss";

import child from "../../assets/images/child.png";

export default function FamilyRole() {
  return (
    <div className="h-100">
      <div className="mx-3 p-0 pt-3 fp-family-role">
        <strong> <p>
          ¿Quienes&nbsp;<InlineSpotlight bg="var(--brand-wine)">acompañamos</InlineSpotlight>&nbsp;los procesos de encarcelamiento?</p>
        </strong>
        <p>
          En su mayoría somos las familiares mujeres, parejas, madres, hermanas quienes asumimos los costos de estos procesos tan complejos, que nos obligan a afrontar los cuidados del adentro y del afuera.
        </p>
        <p>
          <InlineSpotlight bg="var(--brand-wine)">Acompañamos</InlineSpotlight>&nbsp;porque somos agentes de prevención de la tortura. Somos la voz de quién se encuentra cumpliendo una pena, somos la garantía de que se mejoren las condiciones y se respeten los Derechos Humanos.
        </p>
        <p>
          <InlineSpotlight bg="var(--brand-wine)">Sostenemos</InlineSpotlight> porque sabemos que la vida continua afuera, porque la vida continúa luego, porque la vida para ser transformada necesita de esperanza y dignidad.
        </p>
        <div className="mx-1 p-0 pt-2 mt-1 fp-tips float-clean">
          <OffsetCard
            borderColor="#e9a15f"
            bgColor="#efcfb273"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
          >
            <div>
              <img src={child} className="child-image" alt="child logo" />
              <p className="text-justify">
                Tenes que saber que si tu familiar detenido tiene infancias a su cargo,
                seguramente seas la persona que deberá brindar protección a los mismos.
              </p>
              <p className="text-justify">
                Si no podes, lo mejor es aconsejar a la persona detenida que identifique
                referentes protectores y de esta manera dar garantías a los derechos de
                los/as niños, niñas y adolescentes.
              </p>
            </div>
          </OffsetCard>
        </div>
        <div className="mx-2 p-0 mt-4 text-font-size lh-base">
          <FpModal title="Si queres saber más acerca de Los principios de Bogota, pincha acá" onClick={() => { window.open('https://rimuf.org/wp-content/uploads/2023/03/Version-oficial-Espanol-Principios-de-Bogota-Bogota-Colombia-2023-.docx.pdf', '_blank', 'noopener,noreferrer'); }} />
        </div>
        <p>
          <InlineSpotlight bg="var(--brand-wine)">Si tu familiar es una mujer</InlineSpotlight>, está detenida y embarazada o tiene hijos/as pequeños. Tiene derecho a ser trasladada a una unidad para madres con hijos/as, donde pueden ingresar los niños y niñas de 0 a 3 años.
        </p>
      </div>
    </div>
  );
}