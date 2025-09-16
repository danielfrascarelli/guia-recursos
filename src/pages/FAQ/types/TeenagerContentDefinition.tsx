import type { ContentDefinition } from "../../../components/ItemDefinition";
import { RelativeType } from "../../../shared/utils/RelativeType";


export function getTeenagerContentDefinition(): ContentDefinition[] {

  const adulto = [
    {
      id: "1",
      variant: "pretty_white",
      url: "visitas-y-contacto",
      componentType: "VisitasYContactoComponent",
      props: {
        title: "Visitas y contacto",
        type: RelativeType.Teenager
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "traslados",
      componentType: "TrasladosComponent",
      props: {
        title: "Traslados",
        type: RelativeType.Teenager
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "salud",
      componentType: "SaludComponent",
      props: {
        title: "Salud",
        type: RelativeType.Teenager
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "acceso-a-derechos",
      componentType: "AccesoADerechosComponent",
      props: {
        title: "Acceso a derechos y actividades",
        type: RelativeType.Teenager
      },
    },
    {
      id: "5",
      variant: "pretty_white",
      url: "salida",
      componentType: "SalidaComponent",
      props: {
        title: "Salida",
        type: RelativeType.Teenager
      },
    },
  ] satisfies ContentDefinition[];
  return adulto;
}
