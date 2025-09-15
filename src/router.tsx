import { createBrowserRouter } from "react-router-dom";

import Layout from "./layouts/Layout";
import Introduction from "./pages/Introduction/Introduction";
import FamilyRole from "./pages/FamilyRole/FamilyRole";
import Tips from "./pages/Tips/Tips";
import HomePage from "./pages/Home/Home";
import { registry } from "./components/ItemDefinition";
import RouteMap from "./pages/RouteMap/RouteMap";
import ContactosUtiles from "./pages/ContactosUtiles/ContactosUtiles";
import { getContentDefinition as getContactosUtilesContentDefinition } from "./pages/ContactosUtiles/ContentDefinition";
import EarlyMoments from "./pages/RouteMap/components/early-moments/EarlyMoments";
import { getContentDefinition as getEarlyMomentsContentDefinition } from "./pages/RouteMap/components/early-moments/ContentDefinition";
import { SelectRelativeType } from "./pages/RouteMap/components/select-relative-type/SelectRelativeType";
import FAQ from "./pages/FAQ/FAQ";
import { RelativeType } from "./shared/utils/RelativeType";

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
    element: <Layout titleText="Para informarte:" nextRoute="/mapa-de-ruta" />,
    children: [
      { index: true, element: <Tips /> }
    ],
  },
  {
    path: "/mapa-de-ruta",
    element: <Layout titleShow={false} showNextButton={false} />,
    children: [
      { index: true, element: <RouteMap /> },
      // TODO: hacer este routeo de forma mas inteligente

      // /preguntas-frecuentes/primeros-momentos-de-la-detencion'

      {
        path: '/mapa-de-ruta/seleccionar-familiar',
        element: <SelectRelativeType title="dummy" />,
      },
      {
        path: '/mapa-de-ruta/adulto',
        element: <FAQ type={RelativeType.Adult} title="dummy" />,
      },
      {
        path: '/mapa-de-ruta/adolescente',
        element: <FAQ type={RelativeType.Teenager} title="dummy" />,
      },
      // ...getAdultContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/mapa-de-ruta/adulto/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),

      // {
      //   path: '/preguntas-frecuentes/primeros-momentos-de-la-detencion/mapa-de-ruta/adolescente',
      //   element: <TypePerson title="" type="adolescente" />,
      // },

      // ...getTeenagerContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/primeros-momentos-de-la-detencion/mapa-de-ruta/adolescente/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),

      {
        path: '/mapa-de-ruta/primeros-momentos',
        element: <EarlyMoments />,
      },
      ...getEarlyMomentsContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/mapa-de-ruta/primeros-momentos/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),

      // // visitas-y-contacto'
      // {
      //   path: '/preguntas-frecuentes/visitas-y-contacto',
      //   element: <VisitasYContacto />,
      // },
      // ...getVisitasYContactoContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/visitas-y-contacto/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),

      // // traslados
      // {
      //   path: '/preguntas-frecuentes/traslados',
      //   element: <Traslados />,
      // },
      // ...getTrasladosContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/traslados/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),



      // // salud
      // {
      //   path: '/preguntas-frecuentes/salud',
      //   element: <Salud />,
      // },
      // ...getSaludContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/salud/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),


      // // acceso-a-derechos
      // {
      //   path: '/preguntas-frecuentes/acceso-a-derechos-y-actividades',
      //   element: <AccesoADerechos />,
      // },
      // ...getAccesoADerechosContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/acceso-a-derechos-y-actividades/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),

      // // salida
      // {
      //   path: '/preguntas-frecuentes/salida',
      //   element: <Salida />,
      // },
      // ...SalidaContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/salida/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),



      // // contactos-utiles
      // {
      //   path: '/preguntas-frecuentes/contactos-utiles/instituto-nacional-de-rehabilitacion',
      //   element: <Inr title="Instituto Nacional de Rehabilitación" />,
      // },
      // ...getInrContentDefinition().map((i) => {
      //   const Cmp = registry[i.componentType] as React.ComponentType<any>;
      //   return ({
      //     path: `/preguntas-frecuentes/contactos-utiles/instituto-nacional-de-rehabilitacion/${i.url}`,
      //     element: <Cmp key={i} {...i.props} />
      //   })
      // }),



      // contactos-utiles
      {
        path: '/mapa-de-ruta/contactos-utiles',
        element: <ContactosUtiles />,
      },
      ...getContactosUtilesContentDefinition().map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/mapa-de-ruta/contactos-utiles/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),




    ],
  },
]);









 