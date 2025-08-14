import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Welcome";
import Layout from "./layouts/Layout";
import StepLayout from "./layouts/StepLayout";
import Introduction from "./pages/Introduction";
import FamilyRole from "./pages/FamilyRole";
import Tips from "./pages/Tips";
// import FAQ from "./pages/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "/introduccion",
    element: <StepLayout titleText="Introducción" onBack={() => window.history.back()} onNext={() => console.log("Next")} />,
    children: [
      { index: true, element: <Introduction /> },
    ],
  },
  {
    path: "/rol-de-la-familia",
    element: <StepLayout titleText="El rol de la familia" />,
    children: [
      { index: true, element: <FamilyRole /> }
    ],
  },
  {
    path: "/tips",
    element: <StepLayout  titleText="Tips"/>,
    children: [
      { index: true, element: <Tips /> }
    ],
  },
  {
    path: "/primeros-pasos",
    element: <StepLayout titleText="Primeros pasos" showNextButton={false} />,
    children: [
      { index: true, element: <Home /> }
    ],
  },
]);
