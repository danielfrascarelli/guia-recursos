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
        text: (<>
          <div>
            <div>
              <p>Tenes derecho a llamar y consultar sobre el mismo con algún referente del área en la unidad correspondiente.</p>
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
        title: "Salud mental y consumo problemático",
        text: (<>
          <div>
            <div>
              <p>Te sugerimos que puedas averiguar en la unidad dónde se encuentra detenido tu familiar que tipos de dispositivos existen funcionando para el abordaje de la salud mental y el consumo problemático.</p>
              <p>Debido a que son escasos y no en todas existen programas queden respuesta.</p>
            </div>
          </div>
        </>)
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
