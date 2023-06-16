import { createBrowserRouter } from "react-router-dom";
import Delivery from "../pages/Delivery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Delivery />,
  },
]);

export default router;
