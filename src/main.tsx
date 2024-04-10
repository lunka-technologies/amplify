import './index.css';
import { router } from './router/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('amplifi')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
