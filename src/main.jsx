import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root"; 
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

//AGREGAMOS UN ENRUTADOR

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    //Creamos una rutan contacto que es hija de ruta raiz
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
