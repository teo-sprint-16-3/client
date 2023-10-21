import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sample from "./components/Sample";
import MyPage from "./pages/MyPage";
import WorldMapPage from "./pages/WorldMapPage";

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
    element: <WorldMapPage />,
  },
  {
    path: "/my",
    element: <MyPage />,
  },
]);
