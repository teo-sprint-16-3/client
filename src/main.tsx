import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import "./styles/index.scss";
import "normalize.css";
import { router } from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  </React.StrictMode>,
);
