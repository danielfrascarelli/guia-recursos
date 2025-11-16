import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import FlatOffsetCard from "../../../../../components/cards/flat-offset-card/FlatOffsetCard";

export function getAdultContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "Volver a estudiar y la redención de pena",
        text: (<div>
          <div>
            <div className="common-layout-margin text-justify">
              <strong><p>Si tu familiar retoma sus estudios formales puede redimir, disminuir su tiempo de Privación de Libertad.</p>                </strong>
              <ul>
                <li>Se redime 3 x 1 o 2 x 1, esto significa que cada tres días descontas uno o cada dos días descontas uno. Esto último dependerá del tipo de delito.</li>
                <li>Tenes que saber que a partir de la LUC (Ley de Urgente Consideración) No todos los delitos redimen pena, pero entendemos que Estudiar es un Derecho y que además colabora con los procesos de transformación de las personas.</li>
                <li>No en todas las Unidades se puede acceder al estudio eso depende de variables asociadas a la propia Institución. Dentro del INR existe un concepto de progresividad en el proceso que está asociado a que tu familiar acceda a la oferta de estudio.</li>
                <li>La persona detenida puede realizar la solicitud  de acceso al estudio dentro de la misma Unidad.</li>
                <li>Ocurre que cuando el INR no realiza la redención, corresponde que el/la abogado/a presente la solicitud frente al Juez, el mismo puede tomarlo en cuenta o no.</li>
              </ul>
            </div>
            <div className="mt-2 mb-2">
              <FlatOffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="common-layout-margin text-justify">
                  <div className="pt-3">
                    <p> La solicitud de Redención de pena se puede gestionar en la Oficina de Redención de pena de cada Unidad, posterior a comprobar que la persona está estudiando.</p>
                  </div>
                </div>
              </FlatOffsetCard>
            </div>
            <div className="common-layout-margin mt-4 text-justify">
              <p>La persona puede cursar sus primeros estudios como Oyente, en calidad de participante en principio.</p>
            </div>
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
        title: "Acceso al Trabajo",
        text: (<>
          <div className="common-layout-margin text-justify">
            <div>
              <p>Tenes que considerar que existen Cupos Laborales para la persona que se encuentra cumpliendo un medida.</p>
              <p>La persona detenida puede acceder a Cupos Laborales, esto no implica que todos los Trabajos sean remunerados, existen prácticas laborales que son llamadas Comisiones las cuales pueden ser de estudio o trabajo.</p>
              <p>En algunas situaciones particulares se puede acceder a un peculio, el cual corresponde actualmente a dos BPC (Base de Prestaciones y Contribuciones). Puede solicitarlo la persona en la Unidad o el familiar/ referente afectivo realizar la gestión.</p>
            </div>
            <div>
              <a href="https://www.bps.gub.uy/bps/valores.jsp?contentid=5478" target="_blank">
                Pinchando acá obtendrás la información actualizada del valor de la BPC.
              </a>
            </div>
          </div>
        </>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
