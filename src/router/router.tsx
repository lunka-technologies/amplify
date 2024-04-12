import { DashboardPage } from '../pages/dashboard/dashboardPage';
import { LoginPage } from '../pages/login/loginPage';
import { RegisterPage } from '../pages/register/registerPage';
import { RootLayout } from './rootLayout';
import { ROUTE_DASHBOARD, ROUTE_MAIN, ROUTE_REGISTER } from './routes';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTE_MAIN, element: <LoginPage /> },
      { path: ROUTE_REGISTER, element: <RegisterPage /> },
      { path: ROUTE_DASHBOARD, element: <DashboardPage /> },
    ],
  },
]);
