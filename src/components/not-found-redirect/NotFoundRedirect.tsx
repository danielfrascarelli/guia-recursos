import { Navigate, useLocation } from 'react-router-dom';

export function NotFoundRedirect() {
  const location = useLocation();
  console.warn('Ruta no encontrada:', location.pathname);
  return <Navigate to="/" replace />;
}