import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import Home from "../src/pages/home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router