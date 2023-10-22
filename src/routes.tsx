import { createBrowserRouter } from "react-router-dom";
import Sample from "./components/Sample";
import { Note } from "./pages/Note";
import MyPage from "./pages/MyPage";
import WorldMapPage from "./pages/WorldMapPage";
import Intro from "./components/Intro";
import CreateNotePage from "./pages/note/CreateNotePage";

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
