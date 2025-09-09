import { createBrowserRouter } from "react-router-dom";

import Layout from "./layouts/Layout";
import Introduction from "./pages/Introduction/Introduction";
import FamilyRole from "./pages/FamilyRole/FamilyRole";
import Tips from "./pages/Tips/Tips";
import HomePage from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import { TextComponent } from "./components/text-component/TextComponent";
import PrimerosMomentos from "./pages/FAQ/components/PrimerosPasos/PrimerosMomentos";
import VisitasYContacto from "./pages/FAQ/components/VisitasYContacto/VisitasYContacto";
import Traslados from "./pages/FAQ/components/Traslados/Traslados";
import SaludYSanciones from "./pages/FAQ/components/SaludYSanciones/SaludYSanciones";
import AccesoADerechos from "./pages/FAQ/components/AccesoADerechos/AccesoADerechos";

import { Content as ContentPrimerosPasos } from "./pages/FAQ/components/PrimerosPasos/Content";
import { getContentDefinition as getVisitasYContactoContentDefinition } from "./pages/FAQ/components/VisitasYContacto/ContentDefinition";
import { getContentDefinition as getTrasladosContentDefinition } from "./pages/FAQ/components/Traslados/ContentDefinition";
import { getContentDefinition as getSaludYSancionesContentDefinition } from "./pages/FAQ/components/SaludYSanciones/ContentDefinition";
import { getContentDefinition as getAccesoADerechosContentDefinition } from "./pages/FAQ/components/AccesoADerechos/ContentDefinition";
import { getContentDefinition as getLiberacionYEgresoContentDefinition } from "./pages/FAQ/components/LiberacionYEgreso/ContentDefinition";
import { getContentDefinition as getContactosUtilesContentDefinition } from "./pages/FAQ/components/ContactosUtiles/ContentDefinition";
import { getContentDefinition as getInrContentDefinition } from "./pages/FAQ/components/ContactosUtiles/components/inr/inr-component/ContentDefinition";
 

import { registry } from "./components/ItemDefinition";
import LiberacionYEgreso from "./pages/FAQ/components/LiberacionYEgreso/LiberacionYEgreso";
import ContactosUtiles from "./pages/FAQ/components/ContactosUtiles/ContactosUtiles";
import { Inr } from "./pages/FAQ/components/ContactosUtiles/components/inr/inr-component/Inr";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout titleShow={false} backButtonShow={false} showNextButton={false} />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    path: "/introduccion",
    element: <Layout titleText="¿Para qué sirve esta guía?" nextRoute="/rol-de-la-familia" />,
    children: [
      { index: true, element: <Introduction /> },
    ],
  },
  {
    path: "/rol-de-la-familia",
    element: <Layout titleText="El rol de los familiares" nextRoute="/tips" />,
    children: [
      { index: true, element: <FamilyRole /> }
    ],
  },
  {
    path: "/tips",
    element: <Layout titleText="Sugerencias útiles" nextRoute="/preguntas-frecuentes" />,
    children: [
      { index: true, element: <Tips /> }
    ],
  },
  {
    path: "/preguntas-frecuentes",
    element: <Layout titleShow={false} showNextButton={false} />,
    children: [
      { index: true, element: <FAQ /> },
      // TODO: hacer este routeo de forma mas inteligente

      // /preguntas-frecuentes/primeros-momentos-de-la-detencion'
      {
        path: '/preguntas-frecuentes/primeros-momentos-de-la-detencion',
        element: <PrimerosMomentos />,
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_1.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_1.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_1.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_2.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_2.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_2.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_3.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_3.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_3.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_4.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_4.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_4.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_5.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_5.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_5.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_6.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_6.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_6.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_7.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_7.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_7.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_8.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_8.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_8.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_9.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_9.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_9.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_10.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_10.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_10.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_11.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_11.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_11.TEXT}
        />
      },
      {
        path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/${ContentPrimerosPasos.PrimerosMomentos_12.URL}`,
        element: <TextComponent
          title={ContentPrimerosPasos.PrimerosMomentos_12.TITLE}
          text={ContentPrimerosPasos.PrimerosMomentos_12.TEXT}
        />
      },


      // visitas-y-contacto'
      {
        path: '/preguntas-frecuentes/visitas-y-contacto',
        element: <VisitasYContacto />,
      },
      ...getVisitasYContactoContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/preguntas-frecuentes/visitas-y-contacto/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),

      // traslados
      {
        path: '/preguntas-frecuentes/traslados',
        element: <Traslados />,
      },
      ...getTrasladosContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/preguntas-frecuentes/traslados/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),



      // salud-y-sanciones
      {
        path: '/preguntas-frecuentes/salud-y-sanciones',
        element: <SaludYSanciones />,
      },
      ...getSaludYSancionesContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/preguntas-frecuentes/salud-y-sanciones/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),


      // acceso-a-derechos
      {
        path: '/preguntas-frecuentes/acceso-a-derechos-y-actividades',
        element: <AccesoADerechos />,
      },
      ...getAccesoADerechosContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/preguntas-frecuentes/acceso-a-derechos-y-actividades/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),

      // liberacion-y-egreso
      {
        path: '/preguntas-frecuentes/liberacion-y-egreso',
        element: <LiberacionYEgreso />,
      },
      ...getLiberacionYEgresoContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/preguntas-frecuentes/liberacion-y-egreso/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),



      // contactos-utiles
      {
        path: '/preguntas-frecuentes/contactos-utiles/instituto-nacional-de-rehabilitacion',
        element: <Inr />,
      },
      ...getInrContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/preguntas-frecuentes/contactos-utiles/instituto-nacional-de-rehabilitacion/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),



      // contactos-utiles
      {
        path: '/preguntas-frecuentes/contactos-utiles',
        element: <ContactosUtiles />,
      },
      ...getContactosUtilesContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/preguntas-frecuentes/contactos-utiles/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),

      


    ],
  },
]);

 