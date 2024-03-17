import {createBrowserRouter} from "react-router-dom";
import MainLaout from "../laoyuts/MainLaout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;