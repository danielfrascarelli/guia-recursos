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
        title: "¿Es tu primera vez en la unidad?",
        text: (
          <>
            Si es la primera vez que vas a entrar, tendrás que registrarte.
            <ul>
              <li>Llevar cédula de identidad.</li>
              <li>Considera que cada Unidad tiene sus particularidades. La reglamentación puede variar de una unidad a otra. Por eso, te recomendamos comunicarte previamente para confirmar cómo funcionan y despejar las dudas que tengas.</li>
              <li>Aconsejamos que los días y horarios de registro deben ser corroborados previo a la visita en la Unidad.</li>
              <li>En caso de ser del interior del País, considera que para el registro de visitas, te solicitarán un documento que compruebe tu domicilio. Es posible que lo hagan el mismo día pero todo depende de la unidad. </li>
              <li>Se pueden registrar hasta 15 personas como máximo y la persona detenida es quien elige quienes integran esa lista.</li>
              <li>Chequea las condiciones qué hay en la unidad para guardar tus cosas personales, aquellas que  no vas a poder ingresar a la visita.</li>
            </ul>
          </>
        )
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "2",
      componentType: "TextComponent",
      props: {
        title: "¿Cómo se registran las infancias y adolescencias que acuden a las visitas?",
        text: (
          <>
            <div>
              <p>Si es la primera vez que vas a entrar, tendrás que registrarte.</p>
              <p>Lleva:</p>
              <ul>
                <li>partida de nacimiento</li>
                <li>cédula del NNA</li>
                <li>cédula de la persona qué tiene la tenencia del mismo/a</li>
              </ul>
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                En caso de qué concurra con otro familiar debe presentar una nota de autorización firmada.
              </OffsetCard>
            </div>
            <div className="pt-4">
              <p>Tiempos de espera en la visita: </p>
              <p>Contempla que existen prioridades a la hora del ingreso, aquí te contamos cuáles son.</p>
              <p>Embarazadas y personas en situación de discapacidad tienen prioridad a la hora de realizar fila en la unidad. /Acá se meten unos buenos iconos. </p>
            </div>
          </>
        )
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "3",
      componentType: "TextComponent",
      props: {
        title: "¿Cómo es la visita con infancias y adolescencias?",
        text: (<>
          <div>
            En la cárcel de mujeres existe un día particular para la visita de infancias y adolescencias. Actualmente se realizan los días viernes.

            <div className="pt-4">
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
                  Si la persona detenida se encuentra sancionada, nunca se suspende la visita de las infancias y adolescencias.
                </div>
              </OffsetCard>
            </div>
            <div className="pt-4">
              <ul>
                <li>En caso de que las infancias o adolescencias estén bajo la órbita de INAU o INISA, se coordinará con la Unidad previamente con el fin de realizar la visita interinstitucional.</li>
                <li>En caso de que el/la adolescente y el/la adulto/a referente se encuentren detenidos, se realiza la gestión para que el/la adolescente y el/la adulto/a referente tengan visitas especiales.</li>
              </ul>
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
        title: "Vestimenta",
        text: (<>
          <div>
            <div>Cada unidad tiene sus particularidades. </div>
            <div>Aquí te presentamos un listado general, sugerimos consultar a la Unidad ante cualquier duda.</div>

            <div className="pt-4">
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
                  En algunas unidades no se permite el ingreso con caravanas/ accesorios como pircing u otros.
                </div>
              </OffsetCard>
            </div>
            <div className="pt-4">
              <strong>Prendas NO permitidas</strong>
              <ul>
                <li>sin mangas, tops, escotes pronunciados, transparencias.</li>
                <li>short, bermuda, pantalon corto.</li>
                <li>pollera o vestido.</li>
                <li>calzas.</li>
                <li>calzado abierto,  ojotas, sandalias, crocs, tacos, plataformas.</li>
                <li>gorro, capucha, bufanda, guantes.</li>
                <li>ropa interior con aros o relleno.</li>
              </ul>
            </div>
            <div className="pt-4">
              <strong>Colores restringidos</strong>
              <ul>
                <li>azul</li>
                <li>gris</li>
                <li>negro</li>
                <li>beige</li>
                <li>verdes oscuros</li>
                <li>camuflados</li>
              </ul>
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
        title: "¿Qué cosas se le pueden llevar a tu familiar?",
        text: (<>
          <div>
            <div>Te sugerimos que pienses en llevar artículos de consumo básico: </div>
            <ul>
              <li>artículos de higiene personal (jabón, toalla, cepillo de dientes, pasta dental).</li>
              <li>una muda de ropa</li>
              <li>abrigo</li>
            </ul>
          </div>
        </>)
      },
    },
    {
      id: "6",
      variant: "pretty_white",
      url: "6",
      componentType: "TextComponent",
      props: {
        title: "¿Cómo se arma un paquete?",
        text: (<>
          <div>
            <div>
              <ul>
                <li>En una caja. Te sugerimos que se encuentre cerrada de forma hermética.</li>
                <li>NO pueden ingresar objetos de vidrios, ni cubiertos metálicos.</li>
                <li>Todo debe de ingresarse dentro de  bolsas transparentes.</li>
                <li>La caja NO puede superar los 20 kilos.</li>
                <li>Podes enviarla por Correo Uruguay desde el interior, los envios se pueden hacer todas las semanas.</li>
                <li>Cada unidad tiene un día específico para recibir paquetes, pedile a tu familiar que lo consulte previamente o asesórate tu.</li>
              </ul>
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div>
                  <InlineSpotlight bg="var(--brand-wine)">DATO</InlineSpotlight>
                </div>
                <div className="pt-2">
                  <p>En algunas Unidades se puede llevar a la visita solo lo que se va a compartir durante el transcurso de la misma. </p>
                  <p>En otras habilitan el ingreso de más alimentos.</p>
                </div>
              </OffsetCard>
            </div>
            <div className="pt-4">
              <p>En caso de existir escáner en la unidad, la persona y el paquete serán escaneados previo al ingreso. </p>
              <p>En caso de NO existir escáner, la revisión la realizará el personal a cargo.</p>
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
                  <p>Cuando te revisen debes de saber que el personal disponible debe ser de tu mismo sexo.</p>
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
