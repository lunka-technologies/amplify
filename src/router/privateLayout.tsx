import { ROUTE_MAIN } from './routes';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateLayout = () => {
  const isAuthenticated = localStorage.getItem('jwt-token');
  return (
    <>{isAuthenticated ? <Outlet /> : <Navigate to={ROUTE_MAIN} replace />}</>
  );
};
