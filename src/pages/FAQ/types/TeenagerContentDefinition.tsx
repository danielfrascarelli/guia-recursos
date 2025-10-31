import { HeartIcon, HomeIcon, PeopleIcon, TruckIcon } from "../../../assets/icons/icons";
import type { ContentDefinition } from "../../../components/ItemDefinition";
import { RelativeType } from "../../../shared/utils/RelativeType";

export function getTeenagerContentDefinition(): ContentDefinition[] {

  const adulto = [
    {
      id: "1",
      variant: "pretty_white",
      url: "visitas-y-comunicacion",
      icon: <PeopleIcon />,
      componentType: "VisitasYContactoComponent",
      props: {
        title: "Visitas",
        type: RelativeType.Teenager
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
        type: RelativeType.Teenager
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
        type: RelativeType.Teenager
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
      componentType: "SalidaComponent",
      props: {
        title: "Salida",
        type: RelativeType.Teenager
      },
    }, 
        
  ] satisfies ContentDefinition[];
  return adulto;
}
