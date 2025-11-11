import InlineSpotlight from "../../../../../components/inline-spotlight/InlineSpotlight";
import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import OffsetCard from "../../../../../components/cards/offset-card/OffsetCard";

export function getTeenagerContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "Elementos prohibidos",
        text: (<>
          <div className="common-layout-margin">
            <div>
              <p>Los siguientes articulos están prohibidos:</p>
              <ul>
                <li>Todo objeto cortante y/o punzante, que pueda ser utilizado para atentar contra la integridad física de cualquier Persona.</li>
                <li>Televisores, Dvd, Play Station SALVO qué Se cuente con autorización de la Dirección del Centro.</li>
                <li>Celulares, Chips, Cámaras fotográficas.</li>
                <li>Dinero, Joyas, Objetos de valor.</li>
                <li>Sustancias psicoactivas, Medicación no autorizada.</li>
                <li>Encendedores y/o fósforos.</li>
                <li>Desodorantes en aerosol y/o productos que contengan alcohol.</li>
                <li>Perfumes.</li>
                <li>Pilas y baterías con revestimiento metálico.</li>
                <li>Objetos rígidos como peines, cepillos dentales no flexibles, entre otros.</li>
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
        title: "Elementos permitidos",
        text: (<>
          <div>
            <div className="common-layout-margin">
              <p>Los siguientes articulos están permitidos:</p>
              <ul>
                <li>Dos mudas de ropa y un par de championes.</li>
                <li>1 Maquina de afeitar descartable.</li>
                <li>Hasta ocho pilas o baterías, con cubierta de cartón (AA o AAA).</li>
                <li>1 Desodorante en barra o crema, sin alcohol.</li>
                <li>1 Peine de plástico flexible.</li>
                <li>1 Crema dental en envase plástico.</li>
                <li>Un par de chinelas.</li>
                <li>1 repasador de cocina.</li>
                <li>Hasta 5 cajas/ paquetes Cigarrillos y/o Tabaco en envase cerrado, el mismo será transferido a envase de nylon transparente.</li>
                <li>Radio sin antena.</li>
                <li>Hasta dos paquetes de galletitas.</li>
                <li>Equipo de mate completo (bombilla de madera, bambú o similares)</li>
                <li>Hasta 2 kilos de yerba cerrados, se transfieren a bolsa de nylon.</li>
                <li>Hasta 3 bebidas gaseosas, las mismas serán abiertas para comprobar que el envase no fue adulterado.                                          A considerar: Cualquier otro alimento envasado, deberá presentarse en envase original cerrado, para su transferencia a envase de nylon transparente, hasta 3.</li>
              </ul>
            </div>
            <div className="pt-4">
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div>
                  <InlineSpotlight bg="var(--brand-wine)">A considerar</InlineSpotlight>
                </div>
                <div className="pt-2">
                  <p>Cualquier otro alimento envasado, deberá presentarse en envase original cerrado, para su transferencia a envase de nylon transparente, hasta 3.</p>
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
