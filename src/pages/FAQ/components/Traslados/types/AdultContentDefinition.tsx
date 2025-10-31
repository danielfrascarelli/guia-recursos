import InlineSpotlight from "../../../../../components/inline-spotlight/InlineSpotlight";
import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import OffsetCard from "../../../../../components/offset-card/OffsetCard";

export function getAdultContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "Tenes que saber que...",
        text: (<>
          <div>
            <div>
              <p>Para la solicitud de traslado por acercamiento familiar es necesario que presentes una constancia de domicilio, con un recibo de alguna factura (ose, UTE, Antel quizás está bueno poner los logos acá, chiquitos)</p>

              <ul>
                <li>Luego de qué se cumplen los 90 días en la unidad donde la persona detenida fue trasladada puede pedir la misma o algún familiar el traslado. </li>
                <li>Cuando se solicitan traslados pueden transcurrir hasta 150 días para qué se genere una respuesta, pero se trata de qué sea en los 90 días. </li>
                <OffsetCard
                  borderColor="#e9a15f"
                  bgColor="#efcfb273"
                  borderWidth={3}
                  offsetX={7} offsetY={7}
                  overhangX={7} overhangY={7}
                >
                  <div>
                    <InlineSpotlight bg="var(--brand-wine)">IMPORTANTE!</InlineSpotlight>
                  </div>
                  <div className="pt-2">
                    <p>EXISTEN PLAZOS URGENTES CUANDO HAY RIESGO DE VIDA</p>
                  </div>
                </OffsetCard>
                <li>Para realizar la solicitud es importante qué la persona no tenga sanciones.</li>
                <li>“No gastar pólvora en chimangos” después qué se pide un traslado hay un plazo de 90 días para pedir otro. Salvo en situaciones de riesgo de la integridad física. Por ese motivo es recomendable poder evaluar con tu familiar si es conveniente hacer el mismo.</li>
                <li>Dependiendo del riesgo de reincidencia la Junta Nacional de Traslados toma la decisión del lugar al cual será trasladada la persona.</li>
              </ul>
            </div>
          </div>
        </>)
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "2",
      componentType: "TextComponent",
      props: {
        title: "¿Cómo se mide el riesgo de Reincidencia?",
        text: (<>
          <div>
            <div>
              <p>Mediante el  OASIS que es una evaluación qué se aplica a las personas detenidas para “medir” el riesgo de reincidencia. Dependiendo si el mismo es Medio-Alto-Bajo será a la unidad qué es trasladado. </p>

              <div className="pt-1">
                <ul>
                  <li>La decisión más importante para esto es de la persona detenida.                </li>
                  <li>En situaciones de traslados no se informa previamente por cuestiones de seguridad.                </li>
                </ul>
              </div>
              <div className="pt-2">
                <OffsetCard
                  borderColor="#e9a15f"
                  bgColor="#efcfb273"
                  borderWidth={3}
                  offsetX={7} offsetY={7}
                  overhangX={7} overhangY={7}
                >
                  <div>
                    <InlineSpotlight bg="var(--brand-wine)">IMPORTANTE!</InlineSpotlight>
                  </div>
                  <div className="pt-2">
                    <p>Cuando una persona es trasladada a otra unidad por ejemplo por problemas de conducta debe esperar 180 días para volver a solicitar el traslado. </p>
                  </div>
                </OffsetCard>
              </div>
            </div>
          </div>
        </>)
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "3",
      componentType: "TextComponent",
      props: {
        title: "¿Cuándo tomó conocimiento de que mi familiar sería trasladado de unidad?",
        text: (<>
          <div>
            <div>
              <p>
                Corresponde qué la unidad qué deriva o recibe le avisé a algún familiar o qué se habilite una llamada y la persona detenida avisa.
              </p>
            </div>
          </div>
        </>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
