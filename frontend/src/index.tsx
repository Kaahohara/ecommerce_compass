import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Page from './components/page';
import Category from './category';
import ProductDetail from './productdetail';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product',
    element: <Page />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '/category',
    element: <Category />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
