import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/table",
    element: <div>table</div>,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
