import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MyPage from "./pages/MyPage";
import WorldMapPage from "./pages/WorldMapPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
