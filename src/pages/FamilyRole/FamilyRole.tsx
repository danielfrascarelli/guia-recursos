import InlineSpotlight from "../../components/inline-spotlight/InlineSpotlight";
import "./family-role.scss";

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
        <p style={{ "color": "red" }}>
          Globito: Si queres saber más acerca de Los principios de Bogota, pincha acá https://rimuf.org/wp-content/uploads/2023/03/Version-oficial-Espanol-Principios-de-Bogota-Bogota-Colombia-2023-.docx.pdf

          (aca un icono de Niños)

          Tenes que saber que si tu familiar detenido tiene infancias a su cargo, seguramente seas la persona que deberá brindar protección a los mismos.

          Si no podes, lo mejor es aconsejar a la persona detenida que identifique referentes protectores y de esta manera dar garantías a los derechos de los/as niños, niñas y adolescentes.
        </p>
      </div>
    </div>
  );
}