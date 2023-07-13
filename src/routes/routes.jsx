import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddUser from "../pages/AddUser/AddUser";

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
        }
      ]
    },
  ]);

  export default router;