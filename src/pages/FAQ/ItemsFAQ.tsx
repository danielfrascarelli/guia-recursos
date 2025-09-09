import { AlertIcon, PeopleIcon, TruckIcon, HeartIcon, KeyIcon, HomeIcon, PhoneIcon } from "../../assets/icons/icons";
import type { TextListItem } from "../../shared/utils/Item";

import { RoutesFAQ } from "./RoutesFAQ";

export const ItemsFAQ: TextListItem[] = [
  {
    id: "detencion",
    title: "Primeros momentos de la detención",
    icon: <AlertIcon />,
    variant: "green",
    url: RoutesFAQ.PrimerosPasos.URL
  },
  {
    id: "visitas",
    title: "Visitas y contacto",
    icon: <PeopleIcon />,
    variant: "orange",
    url: RoutesFAQ.VisitasYContactos.URL
  },
  {
    id: "traslados",
    title: "Traslados",
    icon: <TruckIcon />,
    variant: "green",
    url: RoutesFAQ.Traslados.URL
  },
  {
    id: "salud",
    title: "Salud y sanciones",
    icon: <HeartIcon />,
    variant: "orange",
    url: RoutesFAQ.SaludYSanciones.URL
  },
  {
    id: "derechos",
    title: "Acceso a derechos y actividades",
    icon: <KeyIcon />,
    variant: "green",
    url: RoutesFAQ.AccesoDerechosActividades.URL
  },
  {
    id: "egreso",
    title: "Liberación y egreso",
    icon: <HomeIcon />,
    variant: "orange",
    url: RoutesFAQ.LiberacionYEgreso.URL
  },
  {
    id: "contactos",
    title: "Contactos útiles",
    icon: <PhoneIcon />,
    variant: "green",
    url: RoutesFAQ.ContactosUtiles.URL
  },
];
