import type { ContentDefinition } from "../../../../../components/ItemDefinition";

import pencil from '../../../../../assets/images/icons/pencil.svg';
import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";
import FlatOffsetCard from "../../../../../components/cards/flat-offset-card/FlatOffsetCard";

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
          <div className="common-layout-margin">
            <p>Si es la primera vez que vas a entrar, tendrás que registrarte.</p>
            <ul>
              <li>Llevar cédula de identidad.</li>
              <li>Considera que cada Unidad tiene sus particularidades. La reglamentación puede variar de una unidad a otra. Por eso, te recomendamos comunicarte previamente para confirmar cómo funcionan y despejar las dudas que tengas.</li>
              <li>Aconsejamos que los días y horarios de registro deben ser corroborados previo a la visita en la Unidad.</li>
              <li>Si vivis a más de sesenta kilómetros de la Unidad que se encuentra tu familiar detenido/a podes registrarte el mismo día de la visita.</li>
              <li>En caso de ser del interior del País, considera que para el registro de visitas, te solicitarán un documento que compruebe tu domicilio. Es posible que lo hagan el mismo día pero todo depende de la unidad. </li>
              <li>Se pueden registrar hasta 15 personas como máximo y la persona detenida es quien elige quienes integran esa lista.</li>
              <li>Chequea las condiciones qué hay en la unidad para guardar tus cosas personales, aquellas que  no vas a poder ingresar a la visita.</li>
            </ul>
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
        title: "¿Cómo se registran las infancias y adolescencias que acuden a las visitas?",
        text: (
          <div>
            <div className="common-layout-margin">
              <p>Si es la primera vez que vas a entrar, tendrás que registrarte.</p>
              <p>Lleva:</p>
              <ul>
                <li>partida de nacimiento</li>
                <li>cédula del NNA</li>
                <li>cédula de la persona qué tiene la tenencia del mismo/a</li>
              </ul>
            </div>

            <div className="mt-3">
              <IconBoxCard
                borderColor="transparent"
                bgColor="#47b2eb4f"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
                imgSrc={pencil}
              >
                En caso de qué concurra con otro familiar debe presentar una nota de autorización firmada.
              </IconBoxCard>
            </div>
            <div className="pt-4 common-layout-margin">
              <p>Tiempos de espera en la visita: </p>
              <ul>
                <li>Contempla que existen prioridades a la hora del ingreso, aquí te contamos cuáles son.</li>
                <li>Embarazadas y personas en situación de discapacidad tienen prioridad a la hora de realizar fila en la unidad. /Acá se meten unos buenos iconos. </li>
              </ul>
            </div>
          </div>
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
            <div className="common-layout-margin">
              <div>
                En la cárcel de mujeres existe un día particular para la visita de infancias y adolescencias. Actualmente se realizan los días viernes.
              </div>
            </div>
            <div className="pt-4">
              <IconBoxCard
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="pt-2">
                  Si la persona detenida se encuentra sancionada, <strong>nunca se suspende la visita</strong> de las infancias y adolescencias.
                </div>
              </IconBoxCard>
            </div>
            <div className="pt-4 common-layout-margin">
              <ul>
                <li>En caso de que los/as niños y/o adolescentes que concurren a la visita estan bajo los cuidados de INAU o INISA se debe de coordinar con la Unidad previamente, a fin de realizar una previa coordinacion interinstitucional para no exponerlos a situaciones incomodas.</li>
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
            <div className="common-layout-margin">
              <div>Cada unidad tiene sus particularidades. </div>
              <div>Aquí te presentamos un listado general, sugerimos consultar a la Unidad ante cualquier duda.</div>
            </div>
            <div className="pt-4">
              <FlatOffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="common-layout-margin t-2">
                  En algunas unidades no se permite el ingreso con caravanas/accesorios como pircing u otros.
                </div>
              </FlatOffsetCard>
            </div>
            <div className="pt-4 common-layout-margin">
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
            <div className="pt-4 common-layout-margin">
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
        title: "¿Qué cosas/artículos se le pueden llevar a tu familiar la primera vez que le visitas?",
        text: (<div> <div className="common-layout-margin">
          <div>Te sugerimos que pienses en llevar artículos de consumo básico: </div>
          <ul>
            <li>artículos de higiene personal (jabón, toalla, cepillo de dientes, pasta dental).</li>
            <li>una muda de ropa</li>
            <li>abrigo</li>
          </ul>
        </div>
          <div className="mt-4">
            <FlatOffsetCard
              borderColor="transparent"
              bgColor="#47b2eb4f"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}>
              <div className="pt-2 pb-2 common-layout-margin">
                <label>En algunas Unidades se puede llevar a la visita solo lo que se va a compartir durante el transcurso de la misma. </label>
                <label>En otras habilitan el ingreso de más alimentos.</label>
              </div>
            </FlatOffsetCard>
          </div>
        </div>)
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
            <div className="common-layout-margin">
              <ul>
                <li>En una caja. Te sugerimos que se encuentre cerrada de forma hermética.</li>
                <li>NO pueden ingresar objetos de vidrios, ni cubiertos metálicos.</li>
                <li>Todo debe de ingresarse dentro de  bolsas transparentes.</li>
                <li>La caja NO puede superar los 20 kilos.</li>
                <li>Podes enviarla por Correo Uruguay desde el interior, los envios se pueden hacer todas las semanas.</li>
                <li>Cada unidad tiene un día específico para recibir paquetes, pedile a tu familiar que lo consulte previamente o asesórate tu.</li>
              </ul>
            </div>
            <div className="mt-4">
              <IconBoxCard
                borderColor="transparent"
                bgColor="#47b2eb4f"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
                imgSrc={pencil}>
                <div className="pt-2">
                  <label>En algunas Unidades se puede llevar a la visita solo lo que se va a compartir durante el transcurso de la misma. </label>
                  <label>En otras habilitan el ingreso de más alimentos.</label>
                </div>
              </IconBoxCard>
            </div>
            <div className="common-layout-margin pt-4">
              <p>En caso de existir escáner en la unidad, la persona y el paquete serán escaneados previo al ingreso. </p>
              <p>En caso de NO existir escáner, la revisión la realizará el personal a cargo.</p>
            </div>
            <div className="mt-4">
              <IconBoxCard
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                <div className="pt-2">
                  <p>Cuando te revisen debes de saber que el personal disponible debe ser de tu mismo sexo y en el control no debe de existir contacto fisico, solo visual.</p>
                </div>
              </IconBoxCard>
            </div>
          </div>
        </>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
