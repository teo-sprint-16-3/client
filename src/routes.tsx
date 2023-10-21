import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sample from "./components/Sample";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/map",
    element: <div></div>,
  },
]);
