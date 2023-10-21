import { createBrowserRouter } from "react-router-dom";
import Sample from "./components/Sample";
import WorldMapPage from "./pages/WorldMapPage";
import Intro from "./components/Intro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/map",
    element: <WorldMapPage />,
  },
]);
