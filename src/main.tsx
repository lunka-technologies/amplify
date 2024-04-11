import { router } from './router/router';
import './scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('amplifi')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
