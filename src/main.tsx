import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

// Estilos globales
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./styles/theme.css";
import "./styles/index.scss";

import familias_presentes from './assets/images/familias_presentes.png';
import europe from './assets/images/europe.svg'
import logo_inr from '/src/assets/images/logos_contactos_utiles/logo_inr.png'
import asse from '/src/assets/images/logos_contactos_utiles/asse.png'
import pnec from '/src/assets/images/logos_contactos_utiles/pnec.png'
import dinali from '/src/assets/images/logos_contactos_utiles/dinali.png'
import comisionado_parlamentario from '/src/assets/images/logos_contactos_utiles/comisionado.parlamentario.png'
import inddhh from '/src/assets/images/logos_contactos_utiles/inddhh.png'

import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')!).render(
  <>
    <HelmetProvider>
      <Helmet>
        <link rel="preload" as="image" href={familias_presentes} />
        <link rel="preload" as="image" href={europe} />
        <link rel="prefetch" as="image" href={logo_inr} />
        <link rel="prefetch" as="image" href={asse} />
        <link rel="prefetch" as="image" href={pnec} />
        <link rel="prefetch" as="image" href={dinali} />
        <link rel="prefetch" as="image" href={comisionado_parlamentario} />
        <link rel="prefetch" as="image" href={inddhh} />
      </Helmet>
    </HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </>,
)
