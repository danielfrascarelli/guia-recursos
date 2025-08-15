import { createBrowserRouter } from "react-router-dom";

import StepLayout from "./layouts/StepLayout";
import Introduction from "./pages/Introduction/Introduction";
import FamilyRole from "./pages/FamilyRole/FamilyRole";
import Tips from "./pages/Tips/Tips";
import HomePage from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import FirstSteps from "./pages/FirstSteps/FirstSteps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StepLayout titleShow={false} backButtonShow={false} showNextButton={false} />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    path: "/introduccion",
    element: <StepLayout titleText="¿Para qué sirve esta guía?" backRoute="/" nextRoute="/rol-de-la-familia" />,
    children: [
      { index: true, element: <Introduction /> },
    ],
  },
  {
    path: "/rol-de-la-familia",
    element: <StepLayout titleText="El rol de los familiares" backRoute="/introduccion" nextRoute="/tips" />,
    children: [
      { index: true, element: <FamilyRole /> }
    ],
  },
  {
    path: "/tips",
    element: <StepLayout titleText="Sugerencias útiles" backRoute="/rol-de-la-familia" nextRoute="/primeros-pasos" />,
    children: [
      { index: true, element: <Tips /> }
    ],
  },
  {
    path: "/primeros-pasos",
    element: <StepLayout titleText="Primeros pasos" backRoute="/tips" showNextButton={false} />,
    children: [
      { index: true, element: <FirstSteps /> }
    ],
  },
  {
    path: "/preguntas-frecuentes",
    element: <StepLayout titleShow={false} backRoute="/primeros-pasos" showNextButton={false} />,
    children: [
      { index: true, element: <FAQ /> }
    ],
  },
]);
