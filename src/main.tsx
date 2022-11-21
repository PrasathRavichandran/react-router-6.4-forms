import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Contact, { loader as ContactLoader } from "./routes/Contact";
import EditContact, { action as EditContactAction } from "./routes/Edit";
import Root, {
  loader as RootLoader,
  action as RootAction,
} from "./routes/Root";
import { action as DestroyAction } from "./routes/Destroy";
import Index from "./routes/Index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: RootLoader,
    action: RootAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: ContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: ContactLoader,
        action: EditContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: DestroyAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
