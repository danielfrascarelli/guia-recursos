import type { ContentDefinition } from "../../../components/ItemDefinition";
import { RelativeType } from "../../../shared/utils/RelativeType";

 
export function getAdultContentDefinition(): ContentDefinition[] {

  const adulto = [
    {
      id: "1",
      variant: "pretty_white",
      url: "visitas-y-contacto",
      componentType: "VisitasYContactoComponent",
      props: {
        title: "Visitas y contacto",
        type: RelativeType.Adult
      },
    },  
    {
      id: "1",
      variant: "pretty_white",
      url: "traslados",
      componentType: "TrasladosComponent",
      props: {
        title: "Traslados",
        type: RelativeType.Adult
      },
    },  
    {
      id: "1",
      variant: "pretty_white",
      url: "vsalud",
      componentType: "SaludComponent",
      props: {
        title: "salud",
        type: RelativeType.Adult
      },
    },  
  ] satisfies ContentDefinition[];
  return adulto;
}
