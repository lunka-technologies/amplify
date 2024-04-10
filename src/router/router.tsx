import { RootLayout } from './rootLayout';
import { ROUTE_MAIN } from './routes';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: ROUTE_MAIN, element: <div>Hello world!!!</div> }],
  },
]);
