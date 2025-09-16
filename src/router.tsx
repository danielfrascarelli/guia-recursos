import { createBrowserRouter, Navigate } from "react-router-dom";

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
import { getRelativeTypeName, RelativeType } from "./shared/utils/RelativeType";
import { getContentDefinition as getFAQContentDefinition } from "./pages/FAQ/ContentDefinition";
import { getContentDefinition as getVisitasYContactoContentDefinition } from "./pages/FAQ/components/VisitasYContacto/ContentDefinition";
import { getContentDefinition as getTrasladosContentDefinition } from "./pages/FAQ/components/Traslados/ContentDefinition";
import { getContentDefinition as getAccesoADerechoContentDefinition } from "./pages/FAQ/components/AccesoADerechos/ContentDefinition";
import { getContentDefinition as getSalidaContentDefinition } from "./pages/FAQ/components/Salida/ContentDefinition";
import { getContentDefinition as getSaludContentDefinition } from "./pages/FAQ/components/Salud/ContentDefinition";

const allFaqRoutes = [RelativeType.Adult, RelativeType.Teenager].flatMap(type => {
  return [{
    url: 'visitas-y-contacto',
    fn: getVisitasYContactoContentDefinition
  },
  {
    url: 'traslados',
    fn: getTrasladosContentDefinition
  },
  {
    url: 'salud',
    fn: getSaludContentDefinition
  },
  {
    url: 'acceso-a-derecho',
    fn: getAccesoADerechoContentDefinition
  },
  {
    url: 'salida',
    fn: getSalidaContentDefinition
  }
  ].flatMap(pathFn => {
    const items = pathFn.fn(type);
    return items.flatMap(i => {
      const Cmp = registry[i.componentType] as React.ComponentType<any>;
      return ({
        path: `/mapa-de-ruta/${getRelativeTypeName(type)}/${pathFn.url}/${i.url}`,
        element: <Cmp key={i} {...i.props} />
      });
    });

  });
});

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

      {
        path: '/mapa-de-ruta/seleccionar-familiar',
        element: <SelectRelativeType title="dummy" />,
      },

      {
        path: '/mapa-de-ruta/adulto',
        element: <FAQ type={RelativeType.Adult} title="dummy" />,
      },
      ...getFAQContentDefinition(RelativeType.Adult).map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/mapa-de-ruta/${getRelativeTypeName(RelativeType.Adult)}/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),

      {
        path: '/mapa-de-ruta/adolescente',
        element: <FAQ type={RelativeType.Teenager} title="dummy" />,
      },
      ...getFAQContentDefinition(RelativeType.Teenager).map((i) => {
        const Cmp = registry[i.componentType] as React.ComponentType<any>;
        return ({
          path: `/mapa-de-ruta/${getRelativeTypeName(RelativeType.Teenager)}/${i.url}`,
          element: <Cmp key={i} {...i.props} />
        })
      }),

      ...allFaqRoutes,

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
  {
    path: '*',
    element: <Navigate to="/" />
  }
]);









