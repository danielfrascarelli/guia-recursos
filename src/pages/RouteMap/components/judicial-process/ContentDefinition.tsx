import InlineSpotlight from "../../../../components/inline-spotlight/InlineSpotlight";
import type { ContentDefinition } from "../../../../components/ItemDefinition";
import OffsetCard from "../../../../components/cards/offset-card/OffsetCard";


export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "Si el juicio es abreviado, ¿qué significa?",
        text: (<>
          <div>
            <div>
              <p>Que el tiempo de resolución es precario y no da garantías en la resolución del mismo. </p>
            </div>
            <div className="pt-2">
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="pt-2">
                  <p>No recomendamos los juicios abreviados.</p>
                </div>
              </OffsetCard>
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
        title: "¿Qué significa el Juicio oral? ",
        text: (<>
          <div>
            <div>
              <p>El <InlineSpotlight bg="var(--brand-wine)">juicio oral</InlineSpotlight> supone una audiencia única, es un proceso más largo que se divide en varias etapas con presentación de pruebas y testigos. </p>
            </div>
            <div className="pt-2">
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="pt-2">
                  <p>Entendemos que da más garantías que los juicios abreviados.</p>
                </div>
              </OffsetCard>
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
        title: "Medidas cautelares",
        text: (<>
          <div>
            <div>
              <p>Existen antes del juicio.</p>
              <p>Son restricciones o limitaciones impuestas por el juez antes del juicio para asegurar qué el proceso penal se pueda desarrollar correctamente.</p>
              <p>Las medidas cautelares (como la prisión preventiva, la tobillera, la fijación de domicilio, entre otras) se aplican durante la investigación y antes de la sentencia, es decir, antes de que haya condena absolución. Su finalidad es asegurar que el proceso se pueda desarrollar (que  la persona no se fugue, no entorpezca la investigación, ni vuelva a cometer delitos). </p>
              <p>Una vez que hay sentencia firme, ya no hay medidas cautelares, sino penas o sanciones.</p>
            </div>
          </div>
        </>)
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "4",
      componentType: "TextComponent",
      props: {
        title: "Pena sustitutiva",
        text: (<>
          <div>
            <div>
              <p>La persona tiene una condena donde debe cumplir ciertas condiciones pero no va a prisión.</p>
              <p>Si la persona incumple las condiciones, el juez puede revocar la libertad a prueba y mandarla a prisión por el resto de la pena. </p>
              <p>La libertad a prueba te permite cumplir tu condena sin estar en prisión, siguiendo un programa personalizado y supervisado por DINAMA (Dirección Nacional de Medidas Alternativas), esta dirección depende del INR.</p>
              <div style={{ color: "red", border: "1px solid red", background: "yellow" }}> Acá podemos ver como agregar la guía de defensoría de ejecución penal o la información.</div>
            </div>
          </div>
        </>)
      },
    },
    {
      id: "5",
      variant: "pretty_white",
      url: "5",
      componentType: "TextComponent",
      props: {
        title: "Que significa la prisión preventiva? ¿que implica?",
        text: (<>
          <div>
            <div>
              <p>La prisión preventiva requiere cumplir con medidas, la misma no significa que la persona deba ingresar a la cárcel. </p>
              <p>Si las medidas no se cumplen, eso implica que la persona debe cumplir el tiempo en prisión. </p>
              <div className="pt-2">
                <OffsetCard
                  borderColor="#e9a15f"
                  bgColor="#efcfb273"
                  borderWidth={3}
                  offsetX={7} offsetY={7}
                  overhangX={7} overhangY={7}
                >
                  <div className="pt-2">
                    <p>Te recordamos que si la persona detenida toma la decisión de ir a juicio oral, no precisamente tendría porque ir a prisión. </p>
                  </div>
                </OffsetCard>
              </div>
              <div className="pt-4">
                <p>Para comunicarte con tu familiar en las Unidades de detención existen cabineros, los mismos tienen un número fijo, te conviene averiguarlo.</p>
              </div>
              <p>Es importante que tengas en cuenta que no siempre funcionan o la persona detenida logra acceder.</p>
              <p>En caso de necesitar una comunicación urgente porque no logras saber de tu familiar hace varios días puedes dirigirte a la Oficina de Atención a la Familia.</p>
              <div className="pt-2">
                <OffsetCard
                  borderColor="#e9a15f"
                  bgColor="#efcfb273"
                  borderWidth={3}
                  offsetX={7} offsetY={7}
                  overhangX={7} overhangY={7}
                >
                  <div className="pt-2">
                    <p>La persona es inocente hasta que se demuestre lo contrario. Por eso aconsejamos respetar los tiempos judiciales acompañando a nuestro familiar durante ese tiempo de incertidumbre. </p>
                  </div>
                </OffsetCard>
              </div>
            </div>
          </div>
        </>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
