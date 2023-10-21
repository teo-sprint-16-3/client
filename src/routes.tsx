import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sample from "./components/Sample";
import { Note } from "./pages/Note";
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
    path: "/note",
    element: <Note />,
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
