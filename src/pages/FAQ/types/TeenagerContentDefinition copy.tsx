import { HeartIcon, HomeIcon, PeopleIcon, TruckIcon } from "../../../assets/icons/icons";
import type { ContentDefinition } from "../../../components/ItemDefinition";
import OffsetCard from "../../../components/offset-card/OffsetCard";
// import { RelativeType } from "../../../shared/utils/RelativeType";


export function getTeenagerContentDefinition(): ContentDefinition[] {

  const adulto = [
    {
      id: "1",
      variant: "pretty_white",
      url: "visitas-y-comunicacion",
      icon: <PeopleIcon />,
      componentType: "TextComponent",
      props: {
        title: "Visitas y comunicación",
        text: (
          <>
            <p>En cada centro existen días de comunicación telefónica  y días de visitas. </p>
            <p>Cuando los familiares se trasladan desde el interior para concurrir a las visitas, se habilita (con previa coordinación) la extensión de la visita familiar.</p>
            <p>Las visitas se acuerdan con la dirección del centro de INISA.</p>
          </>
        )
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "traslados",
      icon: <TruckIcon />,
      componentType: "TextComponent",
      props: {
        title: "Traslados",
        text: (
          <>
            <p>La Junta de Traslados evalua el perfil con el o la adolescente, según perfil, disponibilidad y prácticas de convivencia.</p>
            <p>Las familias pueden presentar solicitudes formales, pero la decisión final es Institucional.</p>
          </>
        )
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "salud",
      icon: <HeartIcon />,
      componentType: "TextComponent",
      props: {
        title: "Salud",
        text: (
          <div className="text-justify">
            <p>El sector de Enfermería evalúa al/la adolescente en el momento del  ingreso; la consulta médica se debe producir  entre las primeras 24-48 horas.</p>
            <p>Derecho a la atención médica en su prestador de salud (FONASA) traslados hasta la Mutualista, en caso de  ser  necesario.</p>
            <p>Acceso a la Historia clínica electrónica de ASSE; información accesible para el/ la adolescente y familia.</p>
            <p>Atención en Salud mental, considerando las demoras actuales, se entiende necesario el cumplimiento a través de la búsqueda de abordaje por equipos interdisciplinarios.</p>
            <OffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              UNIDAD DE ENLACE INISA: 092 724 162
            </OffsetCard>
            <div className="mt-3">
              <p>Los familiares pueden comunicarse con la Unidad para mantenerse informados de  la situación del o la adolescente en situación de privación de libertad.</p>
            </div>
          </div>
        )
      },
    },
    // {
    //   id: "4",
    //   variant: "pretty_white",
    //   url: "acceso-a-derechos",
    //   componentType: "AccesoADerechosComponent",
    //   props: {
    //     title: "Acceso a derechos y actividades",
    //     type: RelativeType.Teenager
    //   },
    // },
    {
      id: "5",
      variant: "pretty_white",
      url: "salida",
      icon: <HomeIcon />,
      componentType: "TextComponent",
      props: {
        title: "Salida",
        text: (
          <div className="text-justify">
            <p>Antes del egreso, se debe coordinar con el Programa de Inserción Social y Comunitaria.</p>
            <p>Puede existir  convenios laborales y educativos vigentes al momento del egreso, consulta acerca de ellos.</p>
            <p>El Centro debe entregar, informe de salud y diagnóstico psicosocial.</p>
            <p>Se deben de coordinar consulta médicas posteriores al egreso  para dar seguimiento a la salud del/ la adolescente. </p>
          </div>
        )
      },
    },
  ] satisfies ContentDefinition[];
  return adulto;
}
