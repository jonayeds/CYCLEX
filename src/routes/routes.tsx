import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import AllBiCycles from "../pages/AllBiCycles";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardMain from "../pages/DashboardMain";
import BicycleDetails from "../pages/BicycleDetails";
import Checkout from "../pages/Checkout";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import PaymentSuccess from "../pages/PaymentSuccess";
import ManageUsers from "../pages/dasboard/admin/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-bicycles",
        element: <AllBiCycles />,
      },
      {
        path: "/bicycle-details/:bicycleId",
        element: <BicycleDetails />,
      },
      {
        path: "/:bicycleId/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment-success",
        element: (
          <ProtectedRoute>
            <PaymentSuccess />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardMain />
      </ProtectedRoute>
    ),
    children:[
        {
            path: "admin/dashboard/users",
            element: <ManageUsers />,
          },
        {
            path: "admin/dashboard/manage-products",
            element: <ManageUsers />,
          },
        {
            path: "admin/dashboard/add-product",
            element: <ManageUsers />,
          },
        {
            path: "admin/dashboard/manage-orders",
            element: <ManageUsers />,
          },
    ]
  },
]);
