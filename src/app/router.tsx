import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Update from "./pages/Update";

export const locations = {
  landing: "/",
  update: "/update",
};

const router = createBrowserRouter([
  {
    path: locations.landing,
    element: <Landing />,
  },
  {
    path: locations.update,
    element: <Update />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
