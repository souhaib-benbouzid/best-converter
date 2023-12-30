import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Update from "./pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
