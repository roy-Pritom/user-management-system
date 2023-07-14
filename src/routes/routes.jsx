import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddUser from "../pages/AddUser/AddUser";
import ViewUser from "../pages/ViewUser/ViewUser";
import AboutPage from "../pages/AboutPage/AboutPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
           path:'/addUser/:id',
           element:<AddUser></AddUser>
        },
        {
            path:'/viewUser/:id',
            element:<ViewUser></ViewUser>
        },
        {
            path:'/about',
            element:<AboutPage></AboutPage>
        }
      ]
    },
  ]);

  export default router;