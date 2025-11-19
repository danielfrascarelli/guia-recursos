import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";

export function getAdultContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "Tenes que saber que...",
        text: (<div className="text-justify">
          <div className="common-layout-margin">
            <p>Para la solicitud de traslado por acercamiento familiar es necesario que presentes una constancia de domicilio, con un recibo de alguna factura (OSE, UTE, Antel).</p>
            <ul>
              <li>Luego de qué se cumplen los primeros 90 días de encarcelamiento en una Unidad, la persona detenida puede pedir el traslado, un familiar referente afectivo en caso de considerarlo también puede hacerlo.</li>
              <li>Cuando se solicitan Traslados de Unidad, el trámite puede demorar hasta 150 días desde el inicio de la solicitud, esto en el ideal no debería de superar los 90 días totales.</li>
            </ul>
          </div>
          <div className="mt-3 mb-3 common-layout-margin-only-desktop">
            <IconBoxCard
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="pt-3 pb-3">
                <div>EXISTEN PLAZOS URGENTES CUANDO HAY RIESGO DE VIDA</div>
              </div>
            </IconBoxCard>
          </div>
          <div className="common-layout-margin">
            <ul>
              <li>Para realizar la solicitud de traslado, es importante qué la persona no tenga sanciones.</li>
              <li>"No gastar pólvora en chimangos" después que se pide un traslado hay un plazo de 90 días para pedir otro. Salvo en situaciones de riesgo de la integridad física. Por ese motivo es recomendable poder evaluar con tu familiar si es conveniente hacer el mismo.</li>
              <li>Dependiendo del riesgo de reincidencia la Junta Nacional de Traslados toma la decisión del lugar al cual será trasladada la persona.</li>
              <li>La Junta Nacional de Traslados toma la decisión del lugar al cual será trasladada la persona.</li>
            </ul>
          </div>
        </div>)
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "2",
      componentType: "TextComponent",
      props: {
        title: "¿Cómo se mide el riesgo de volver a cometer un delito?",
        text: (<div className="text-justify">
          <div className="common-layout-margin">
            <p>Mediante el Programa OASys, el cual es una Evaluación de la Junta, qué se aplica a las personas detenidas cuando se encuentran ya dentro del sistema penitenciario. Este Programa fue creado con el fin de establecer una categoría asociada a la designación de la Unidad y/o el Traslado de la persona.</p>
          </div>
          <div className="mt-3 mb-3 common-layout-margin-only-desktop">
            <IconBoxCard
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="pt-3 pb-3">
                <div>Cuando una persona es trasladada a otra unidad por ejemplo por problemas de conducta debe esperar 180 días para volver a solicitar el traslado. </div>
              </div>
            </IconBoxCard>
          </div>
          <div className="common-layout-margin">
            <p>Recordá que la decisión del traslado es de la persona detenida.</p>
            <div className="pt-1">
              <ul>
                <li>En situaciones de traslados no se informa previamente por cuestiones de seguridad.</li>
              </ul>
            </div>
          </div>
        </div>)
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "3",
      componentType: "TextComponent",
      props: {
        title: "¿Cuándo tomó conocimiento de que mi familiar sería trasladado de unidad?",
        text: (
          <div className="common-layout-margin text-justify">
            <p>
              Corresponde que la unidad que deriva o recibe le avisé a algún familiar o qué se habilite una llamada y la persona detenida avisa.
            </p>
          </div>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
