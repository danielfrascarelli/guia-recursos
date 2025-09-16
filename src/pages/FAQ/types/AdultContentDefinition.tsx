import { HeartIcon, HomeIcon, KeyIcon, PeopleIcon, TruckIcon } from "../../../assets/icons/icons";
import type { ContentDefinition } from "../../../components/ItemDefinition";
import { RelativeType } from "../../../shared/utils/RelativeType";


export function getAdultContentDefinition(): ContentDefinition[] {

  const adulto = [
    {
      id: "1",
      variant: "pretty_white",
      url: "visitas-y-contacto",
      icon: <PeopleIcon />,
      componentType: "VisitasYContactoComponent",
      props: {
        title: "Visitas y contacto",
        type: RelativeType.Adult
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "traslados",
      icon: <TruckIcon />,
      componentType: "TrasladosComponent",
      props: {
        title: "Traslados",
        type: RelativeType.Adult
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "salud",
      icon: <HeartIcon />,
      componentType: "SaludComponent",
      props: {
        title: "Salud",
        type: RelativeType.Adult
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "acceso-a-derechos",
      icon: <KeyIcon />,
      componentType: "AccesoADerechosComponent",
      props: {
        title: "Acceso a derechos y actividades",
        type: RelativeType.Adult
      },
    },
    {
      id: "5",
      variant: "pretty_white",
      url: "salida",
      icon: <HomeIcon />,
      componentType: "SalidaComponent",
      props: {
        title: "Salida",
        type: RelativeType.Adult
      },
    },
  ] satisfies ContentDefinition[];
  return adulto;
}
