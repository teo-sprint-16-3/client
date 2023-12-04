import { createBrowserRouter } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import { Note } from "./pages/Note";
import { FilterNote } from "./pages/Note/FilterNote";
import { NoteDetail } from "./pages/Note/NoteDetail";
import MyPage from "./pages/MyPage";
import StampPage from "./pages/StampPage";
import WorldMapPage from "./pages/WorldMapPage";
import CreateNotePage from "./pages/Note/CreateNotePage";
import BadgePage from "./pages/MyPage/BadgePage";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/note",
    element: <Note />,
  },
  {
    path: "/note/:params",
    element: <FilterNote />,
  },
  {
    path: "/note/detail/:id",
    element: <NoteDetail />,
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
    path: "my",
    element: <MyPage />,
  },
  {
    path: "my/stamp",
    element: <StampPage />,
  },
  {
    path: "my/badge",
    element: (
      <Suspense>
        <BadgePage />
      </Suspense>
    ),
  },
]);
