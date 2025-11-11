import { HeartIcon, HomeIcon, KeyIcon, PeopleIcon, TruckIcon } from "../../../assets/icons/icons";
import type { ContentDefinition } from "../../../components/ItemDefinition";
import { RelativeType } from "../../../shared/utils/RelativeType";

import acceso from '../../../assets/images/menu/acceso.svg';
import esposas from '../../../assets/images/esposas.svg';
import salida from '../../../assets/images/menu/salida.svg';
import salud from '../../../assets/images/menu/salud.svg';
import traslados from '../../../assets/images/menu/traslados.svg';
import visitas from '../../../assets/images/menu/visitas.svg';

export function getAdultContentDefinition(): ContentDefinition[] {
  const adulto = [
    {
      id: "1",
      variant: "pretty_white",
      url: "detenciones",
      imageUrl: esposas,
      icon: <PeopleIcon />,
      componentType: "DetentionsComponent",
      props: {
        title: "Detenciones en adultos",
        type: RelativeType.Adult
      },
    },
    {
      id: "2",
      variant: "pretty_white",
      url: "visitas-y-comunicacion",
      imageUrl: visitas,
      icon: <PeopleIcon />,
      componentType: "VisitasYContactoComponent",
      props: {
        title: "Visitas",
        type: RelativeType.Adult
      },
    },
    {
      id: "3",
      variant: "pretty_white",
      url: "traslados",
      imageUrl: traslados,
      icon: <TruckIcon />,
      componentType: "TrasladosComponent",
      props: {
        title: "Traslados",
        type: RelativeType.Adult
      },
    },
    {
      id: "4",
      variant: "pretty_white",
      url: "salud",
      imageUrl: salud,
      icon: <HeartIcon />,
      componentType: "SaludComponent",
      props: {
        title: "Salud",
        type: RelativeType.Adult
      },
    },
    {
      id: "5",
      variant: "pretty_white",
      url: "acceso-a-derechos",
      imageUrl: acceso,
      icon: <KeyIcon />,
      componentType: "AccesoADerechosComponent",
      props: {
        title: "Acceso a derechos y actividades",
        type: RelativeType.Adult
      },
    },
    {
      id: "6",
      variant: "pretty_white",
      url: "salida",
      imageUrl: salida,
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
