import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sample from "./components/Sample";
import CreateNotePage from "./pages/note/CreateNotePage";

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
    path: "/note/post",
    element: <CreateNotePage />,
  },
]);
