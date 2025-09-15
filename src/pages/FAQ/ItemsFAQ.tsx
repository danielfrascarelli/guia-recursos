import { AlertIcon, PeopleIcon, TruckIcon, HeartIcon, KeyIcon, HomeIcon, PhoneIcon } from "../../assets/icons/icons";
import type { TextListItem } from "../../shared/utils/Item";

import { RoutesFAQ } from "./RoutesFAQ";

export const ItemsFAQ: TextListItem[] = [
  {
    id: "visitas",
    title: "Visitas y contacto",
    icon: <PeopleIcon />,
    variant: "pretty_white",
    url: RoutesFAQ.VisitasYContactos.URL
  },
  {
    id: "traslados",
    title: "Traslados",
    icon: <TruckIcon />,
    variant: "pretty_white",
    url: RoutesFAQ.Traslados.URL
  },
  {
    id: "salud",
    title: "Salud",
    icon: <HeartIcon />,
    variant: "pretty_white",
    url: RoutesFAQ.SaludYSanciones.URL
  },
  {
    id: "derechos",
    title: "Acceso a derechos y actividades",
    icon: <KeyIcon />,
    variant: "pretty_white",
    url: RoutesFAQ.AccesoDerechosActividades.URL
  },
  {
    id: "egreso",
    title: "La salida",
    icon: <HomeIcon />,
    variant: "pretty_white",
    url: RoutesFAQ.Salida.URL
  },
  {
    id: "contactos",
    title: "Contactos útiles",
    icon: <PhoneIcon />,
    variant: "pretty_white",
    url: RoutesFAQ.ContactosUtiles.URL
  },
];
