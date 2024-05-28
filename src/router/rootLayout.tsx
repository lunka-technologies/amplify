import { LOCAL_JWT_KEY } from '../constants/localHostConstants';
import { ROUTE_DASHBOARD } from './routes';
import { Navigate, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  const isAuthenticated = localStorage.getItem(LOCAL_JWT_KEY);

  return (
    <>
      {isAuthenticated ? <Navigate to={ROUTE_DASHBOARD} replace /> : <Outlet />}
    </>
  );
};
