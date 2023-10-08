import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AllJewelry from "../Pages/AllJewelry";
import MyJewelries from "../Pages/MyJewelries";
import AddJewelry from "../Pages/AddJewelry";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MyCart from "../Pages/Dashboard/MyCart";
import PrivateRoute from "./PrivateRoutes";

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
        element: <PrivateRoute><MyJewelries></MyJewelries></PrivateRoute>
      },
      {
        path: '/add-jewelry',
        element: <PrivateRoute><AddJewelry></AddJewelry></PrivateRoute>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/my-cart',
        element: <MyCart></MyCart>
      }
    ]
  }
]);
export default router;
