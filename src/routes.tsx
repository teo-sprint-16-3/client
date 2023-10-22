import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Note } from "./pages/Note";
import MyPage from "./pages/MyPage";
import WorldMapPage from "./pages/WorldMapPage";
import CreateNotePage from "./pages/Note/CreateNotePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/note/post",
    element: <CreateNotePage />,
  },
  {
    path: "/my",
    element: <MyPage />,
  },
]);
