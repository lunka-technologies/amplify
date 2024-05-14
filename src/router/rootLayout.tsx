import { ROUTE_DASHBOARD } from './routes';
import { Navigate, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  const isAuthenticated = localStorage.getItem('jwt-token');
  return (
    <>
      {!isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to={ROUTE_DASHBOARD} replace />
      )}
    </>
  );
};
