import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";
import type { ContentDefinition } from "../../../../../components/ItemDefinition";

export function getAdultContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "1",
      variant: "pretty_white",
      url: "1",
      componentType: "TextComponent",
      props: {
        title: "¿Cuándo tienes conocimiento de qué tu familiar tiene algún problema de salud?",
        text: (<div>
          <div className="common-layout-margin text-justify">
            <p>Desde Familias Presentes comprendemos que el acompañamiento en el cuidado de la salud es de especial importancia.</p>
            <p>Si tu familiar tiene algun problema de salud crónico, está bueno que estes al tanto de su situación, si accede a la medicación correspondiente o se debe de realizar la solicitud de la misma.</p>
            <p>La persona que acompana tiene derecho a llamar y consultar acerca de la situacion de salud de su ser querido, esta consulta se realiza con el referente del área en la Unidad correspondiente.</p>
            <p>En cada Unidad existe un/a Coordinador/a encargado del Área de Salud.</p>
            <p>También podes dirigirte a la
              <a href="/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion/oficinas/1" target='_blank'>
                Oficina de Atención a la Familia
              </a> de forma presencial o enviandoles un mail al correo:
              <a href="mailto:inr-pplatencionalfamiliar@minterior.gub.uy" target='_blank'>
                inr-pplatencionalfamiliar@minterior.gub.uy
              </a>
              , allí se encargarán de recepcionar tu solicitud generando un expediente, te recomendamos que solicites luego de realizado el trámite, el número de expediente para hacerle seguimiento y como garantia de que se dio inicio al trámite.
            </p>
          </div>
          <div className="mt-3 mb-3 text-justify">
            <IconBoxCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="pt-3 pb-3">
                Es importante que siempre que vayas a realizar un trámite, tengas a mano el número de Cédula de Identidad de tu familiar.
              </div>
            </IconBoxCard>
          </div>
          <div className="common-layout-margin text-justify">
            <p>Si tu familiar es mujer, debe de existir acceso a métodos anticonceptivos, realización de rutinas como el Papanicolau, Mamografías, entre otros.</p>
            <p>Es importante que exista acceso a la informacion en Derechos de Salud Sexual y Reproductiva.</p>
            <p>En caso de depender de la Unidad de SAIPPL existe un correo de Atención, donde los/as familiares pueden realizar consultas y solicitudes al correo:&nbsp;
              <a href="mailto:atencionalusuario086@asse.com.uy" target='_blank'>
                &nbsp;atencionalusuario086@asse.com.uy&nbsp;</a>o al telefóno:<a href="tel:+59823550456" target='_blank'>&nbsp;23550456</a>.</p>
            <p>Las Unidades qué dependen de SAIPPL son las Nro. 4, 5, 9, 1, 3, 12.</p>
            <p>El resto de las Unidades dependen de Sanidad Policial. Se proyecta que toda la atención en Salud, pertenezca a ASSE.</p>
          </div>




          {/* <div className="common-layout-margin">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>También podes dirigirte a la
              <a href="/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion/oficinas/1" target='_blank'>
                &nbsp;Oficina de Atención a la Familia&nbsp;
              </a>
              vía email o presencial, y allí se ingresará una solicitud por alguien encargado del área de salud. </p>
            <p>Se genera un expediente que se remite a la unidad. </p>
            <p>Te recomendamos llevar contigo el número de expediente.</p>
          </div>
          <div className="pt-2">
            <p>Tene en cuenta que:</p>
            <ul>
              <li>En caso de internación de tu familiar, se pueden solicitar cuidados para la persona. Dicha gestión se puede realizar en el INR quién determinará si es viable o no. Luego tiene que habilitar el Centro de Salud.</li>
              <li>También es posible que no se habiliten los cuidados pero sí, una visita especial. Se puede autorizar a algún familiar a que lo vea. Esto dependerá del perfil de la persona detenida. De esto se encarga el INR. </li>
              <li>Es necesario tener presente qué no todos los hospitales habilitan visitas, si se puede acceder siempre al informe médico.</li>
            </ul>
          </div> */}
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
        title: "Tenes que saber que",
        text: (<div>
          <div className="common-layout-margin text-justify">
            <ul>
              <li>A través de SAI PPL podes hacer llegar una medicación a tu familiar.</li>
              <li>En caso de que la persona necesite atención en un Centro de Salud, dependerá de las disposiciones de ese Centro Hospitalario, que los familiares accedan a informes, médicos, visitas y/o cuidados.</li>
              <li>En caso de internación, el acompañamiento y cuidados de la persona se pueden solicitar a través del INR, allí evaluarán si es posible o no, luego de tener esa respuesta, se solicita que el Centro de Salud lo habilite.</li>
              <li>Considera que puede que no se habiliten las visitas y cuidados durante el periodo de internación y/ o visitas especiales.</li>
              <li>Es necesario tener presente qué no todos los Centro Hospitalarios habiliten visitas, para el acceso a los informes médicos debes de consultar en que horarios se realizan, casi siempre se dan dos informes al día, depende de cada Centro de Salud.</li>
            </ul>
          </div>
          <div className="mt-3 mb-3 text-justify">
            <IconBoxCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="pt-3 pb-3">
                En cuanto al acceso a la Salud Sexual y Reproductiva, tenes que saber que es un derecho de toda persona. El profesional que te atiende debe proporcionarte toda la información pertinente en cuanto a los cuidados y métodos tanto anticonceptivos como de barrera.
              </div>
            </IconBoxCard>
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
        title: "Salud mental y consumo problemático",
        text: (
          <div>
            <div className="common-layout-margin text-justify">
              <p>Para la atención en Salud Mental y tratamiento en Adicciones, te sugerimos que consultes qué tipo de Dispositivos y/o Proyectos están funcionando en la Unidad donde se encuentra tu familiar,  también tenes que averiguar,  cómo se realiza la solicitud de atención en dichos Proyectos, los mismos son escasos o no existen en todas las Unidades. </p>
            </div>
          </div>
        )
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "4",
      componentType: "TextComponent",
      props: {
        title: "Tuberculosis en prisión: lo qué necesitamos saber para poder acompañar mejor a nuestro familiar.",
        text: (<>
          <div className="common-layout-margin text-justify">
            <div>
              <p>La tuberculosis es una de las enfermedades qué más afecta a las personas privadas de libertad.. Esto se debe a las condiciones de vida dentro de las celdas y las Unidades, siendo el hacinamiento una de las características más comunes para la propagación de la misma.<br />La superpoblación a su vez, hace que los controles en salud sean escasos, por eso es importante que pidas información acerca de los controles de salud de tu familiar. </p>
              <p>Debes saber que se transmite por vía aérea, cuando una persona que tiene la enfermedad tose, libera bacterias que pueden ser inhaladas por quienes comparten el espacio, por eso los lugares cerrados son propicios para que se expanda.</p>
              <p>No se transmite por contacto con ropa personal, cama o uso de platos, cubiertos u objetos personales de la persona enferma.<br />Tampoco se transmite en las relaciones sexuales, ni en las trasnfusiones de sangre, de todas formas hay otras enfermedades que si, por lo que siempre debes de usar protección. </p>
              <p>Tenes que saber que si se puede compartir Mate.</p>
              <p>Es importante conocer los síntomas, saber cómo se previene y qué hacer frente a la situación.</p>
              <p>
                Pincha aqui para saber más:
                <a href="https://familiaspresentes.uy/guia-docs/Comisión Honoraria para la Lucha Antituberculosa y Enfermedades Prevalentes.pdf" target="_blank">
                  &nbsp;Comisión Honoraria para la Lucha Antituberculosa y Enfermedades Prevalentes
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
