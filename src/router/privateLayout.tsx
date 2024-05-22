import { LOCAL_JWT_KEY } from '../constants/localHostConstants';
import { ROUTE_MAIN } from './routes';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateLayout = () => {
  const isAuthenticated = localStorage.getItem(LOCAL_JWT_KEY);
  return (
    <>{isAuthenticated ? <Outlet /> : <Navigate to={ROUTE_MAIN} replace />}</>
  );
};
