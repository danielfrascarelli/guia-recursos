import InlineSpotlight from "../../../../../components/inline-spotlight/InlineSpotlight";
import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import OffsetCard from "../../../../../components/cards/offset-card/OffsetCard";


export function getAdultContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "Redención de pena",
        text: (<>
          <div className="common-layout-margin">
            <div>
              <ul>
                <li>Se redime 3x1 o 2x1, esto significa que cada tres días descontas uno o cada dos días descontas uno. Esto último dependera del tipo de delito.</li>
                <li>NO todos los delitos redimen pena.</li>
                <li>La puede realizar la persona dentro de la misma unidad. Esto dependerá de las condiciones de la misma, en relación a la cantidad de población. En este sentido, desde la unidad se informa al juzgado.</li>
                <li>Ocurre que cuando el INR no realiza la redención, corresponde que el abogado lo haga. </li>
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
        title: "Cupos laborales",
        text: (<>
          <div className="common-layout-margin">
            <div>
              <ul>
                <li>La persona detenida puede acceder a cupos laborales, lo cual no implica que sea remunerado. </li>
                <li>En algunas situaciones particulares se puede acceder a un peculio, que es un monto de dinero menor. Puede solicitarlo la persona en la unidad o el familiar realizar la gestión.</li>
              </ul>
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
        title: "Cupos educativos",
        text: (<>
          <div>
            <div className="common-layout-margin">
              <ul>
                <li>Los cupos educativos pueden ser solicitados por la persona en la unidad o por el familiar si la misma no logra tener acceso.</li>
                <li>Ocurre que muchas veces son reducidos, por lo que las personas no siempre accedan. </li>
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
                  <p>El importante saber que la persona tiene derecho a cursar como oyente y dar el examen libre.</p>
                </div>
              </OffsetCard>
            </div>
          </div>
        </>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
