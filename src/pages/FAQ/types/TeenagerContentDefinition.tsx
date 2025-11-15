import { HeartIcon, HomeIcon, PeopleIcon, TruckIcon } from "../../../assets/icons/icons";
import type { ContentDefinition } from "../../../components/ItemDefinition";
import { RelativeType } from "../../../shared/utils/RelativeType";

import esposas from '../../../assets/images/esposas.svg';
import salida from '../../../assets/images/menu/salida.svg';
import salud from '../../../assets/images/menu/salud.svg';
import traslados from '../../../assets/images/menu/traslados.svg';
import visitas from '../../../assets/images/menu/visitas.svg';

export function getTeenagerContentDefinition(): ContentDefinition[] {

  const adulto = [
    {
      id: "1",
      variant: "pretty_white",
      url: "detenciones",
      imageUrl: esposas,
      icon: <PeopleIcon />,
      componentType: "DetentionsComponent",
      props: {
        title: "Detenciones en adolescencias",
        type: RelativeType.Teenager
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
        type: RelativeType.Teenager
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
        type: RelativeType.Teenager
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
        type: RelativeType.Teenager
      },
    },
    {
      id: "5",
      variant: "pretty_white",
      url: "salida",
      imageUrl: salida,
      icon: <HomeIcon />,
      componentType: "SalidaComponent",
      props: {
        title: "La salida",
        type: RelativeType.Teenager
      },
    }
  ] satisfies ContentDefinition[];
  return adulto;
}
