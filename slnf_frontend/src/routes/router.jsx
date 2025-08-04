import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home";
import Root from "../pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
        {
            index:true,
            element : <Home></Home>
        },
        {
            path: "/login",
    
        }
    ]
  },
]);

export default router;
