import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AllJewelry from "../Pages/AllJewelry";
import MyJewelries from "../Pages/MyJewelries";
import AddJewelry from "../Pages/AddJewelry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: '/all-jewelries',
        element: <AllJewelry></AllJewelry>
      },
      {
        path: '/my-jewelries',
        element: <MyJewelries></MyJewelries>
      },
      {
        path: '/add-jewelry',
        element: <AddJewelry></AddJewelry>
      }
    ],
  },
]);
export default router;
