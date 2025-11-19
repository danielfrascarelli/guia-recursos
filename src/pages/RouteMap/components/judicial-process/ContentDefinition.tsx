import FlatOffsetCard from "../../../../components/cards/flat-offset-card/FlatOffsetCard";
import IconBoxCard from "../../../../components/cards/icon-box-card/IconBoxCard";
import type { ContentDefinition } from "../../../../components/ItemDefinition";

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "Juicio abreviado",
        text: (<div>
          <div className="common-layout-margin text-justify">
            <p>
              Este tipo de procedimiento genera que se evite ir a juicio, se lo entiende como una medida de resolución más rápida, acorde a los tiempos judiciales pero NO es una medida que desde Familias Presentes aconsejemos, dado que en ocasiones la persona reconoce el hecho que se le imputa sin asesoramiento legal o bajo los efectos del estrés que generan este tipo de hechos, asumiendo una pena otorgada por Fiscalía
            </p>
          </div>
          <div className="mt-3 mb-3 text-justify common-layout-margin-only-desktop">
            <IconBoxCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="pt-3 pb-3">
                No se recomienda firmar un acuerdo abreviado en las primeras horas de detención. La normativa internacional junto a las Guías en asesoramiento en Derechos, aconsejan esperar al menos 40 horas antes de tomar esa decisión.
              </div>
            </IconBoxCard>
          </div>
        </div>
        )
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "2",
      componentType: "TextComponent",
      props: {
        title: "Juicio oral",
        text: (<div>
          <div className="common-layout-margin text-justify">
            <p>En este proceso, la Fiscalía y la Defensa presentan pruebas y argumentos ante un juez de turno el cual realiza una valoración decidiendo además que la persona sea responsable o no en el hecho adjudicado.</p>
            <p>El tiempo de resolución es más largo que el de otros procesos, pero entendemos que es el camino donde se puede dar un mejor proceso hacia la sentencia con mayores garantías de Derechos.</p>
            <p>Además permite a todas las partes participar y discutir los hechos y el tiempo de condena.</p>
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
        title: "Pena sustitutiva / libertad a prueba",
        text: (
          <div>
            <div className="common-layout-margin text-justify">
              <p>En algunos casos, se determina que la condena no sea una medida privativa de libertad, esto significa que existe el cumplimiento de una pena sustitutiva fuera de la prisión, a esto se le llama Libertad a prueba.</p>
              <p>Esto significa que la persona debe cumplir tareas y condiciones, como por ejemplo adherir a tareas laborales, propuestas de estudio, no acercarse a determinados lugares o personas.</p>
              <p>A su vez, tenes que saber que esta medida implica que la persona debe presentarse regularmente ante el OSLA (Oficina de Supervisión de Libertad Asistida) o la Comisaría que disponga el Juez/a.</p>
              <p>Recordá que las condiciones las resuelve siempre el Juez y son el cumplimiento de la pena, esto incluye que se debe de seguir un Programa personalizado y supervisado por la Dirección Nacional de Medidas Alternativas (DINAMA) la cual depende del Instituto Nacional de Rehabilitación (INR).</p>

            </div>
            <div className="mt-3 mb-3 text-justify common-layout-margin-only-desktop">
              <IconBoxCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="pt-3 pb-3">
                  Es importante que vos y tu familiar comprendan que la medida llamada Libertad a prueba, implica un compromiso con las indicaciones y pautas dadas para el cumplimiento de la medida, esto se da a través de una Resolución judicial y cumpliéndose correctamente  evita la prisión. Consulta con el/la abogado/a defensor/a para colaborar con el cumplimiento de la medida.
                </div>
              </IconBoxCard>
            </div>
            <div className="common-layout-margin text-justify">
              <p>Si existe un cambio de dirección domiciliaria es importante que la nueva dirección sea informada y autorizada por el juez o jueza. Se deben explicar las causas del cambio de domicilio.</p>
              <p>No hacerlo puede traer consecuencias graves, incluso la revocación de la libertad y prisión.</p>
              <p>Si tu familiar es Adolescente, tenes que volver a leer la sección que dedicamos a ello en la GUIA, pero es IMPORTANTE que sepas que las Medidas deben de cumplirse siempre, sino sucede, la persona puede ser condenada con una medida Privativa de Libertad.</p>
            </div>
            <div className="common-layout-margin-only-desktop mb-3">
              <div className="mt-2">
                <FlatOffsetCard
                  borderColor="#e9a15f"
                  bgColor="#efcfb273"
                  borderWidth={3}
                  offsetX={7} offsetY={7}
                  overhangX={7} overhangY={7}
                >
                  <div className="mx-xl-4 my-3 common-layout-margin-only-not-desktop">
                    La persona es inocente hasta que se demuestre lo contrario. Por eso aconsejamos respetar los tiempos judiciales acompañando a nuestro familiar durante ese tiempo de incertidumbre.
                  </div>
                </FlatOffsetCard>
              </div>
            </div>
            {/* <div className="common-layout-margin text-justify">
              <p>Para comunicarte con tu familiar en las Unidades de detención existen cabineros (icono de teléfono), los mismos tienen un número fijo, te conviene averiguarlo.</p>
              <p>Es importante que tengas en cuenta que no siempre funcionan o la persona detenida logra acceder.</p>
            </div>
            <div className="mt-3 mb-3 text-justify common-layout-margin-only-desktop">
              <IconBoxCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="pt-3 pb-3">
                  En caso de necesitar una comunicación urgente porque no logras saber de tu familiar hace varios días puedes dirigirte a la Oficina de Atención a la Familia.
                </div>
              </IconBoxCard>
            </div>             */}
          </div>
        )
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
