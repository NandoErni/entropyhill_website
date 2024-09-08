import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Linktree from "./pages/Linktree/Linktree";
import ElectronicPressKit from './pages/ElectronicPressKit/ElectronicPressKit';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/linktree",
        element: <Linktree/>,
    },
    {
        path: "/epk",
        element: <ElectronicPressKit/>,
    },
    {
        path: "/electronicpresskit",
        element: <ElectronicPressKit/>,
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
