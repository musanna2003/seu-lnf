import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home";
import Root from "../pages/Root";
import LostItems from "../pages/LostItems";
import FoundItems from "../pages/FoundItems";
import ReportLost from "../pages/ReportLost";
import ReportFound from "../pages/ReportFound";
import MyListing from "../pages/MyListing";
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
            path: "/lost-items",
            element : <LostItems></LostItems>
        },
        {
          path : "/found-items",
          element : < FoundItems></FoundItems>
        },
        {
          path : "/report-lost",
          element : <ReportLost></ReportLost>
        },
        {
          path : "/report-found",
          element : <ReportFound></ReportFound>
        },
        {
          path : "/my-listing",
          element : <MyListing></MyListing>
        }
    ]
  },
]);

export default router;
