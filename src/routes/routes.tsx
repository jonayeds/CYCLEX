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
import ManageProducts from "../pages/dasboard/admin/ManageProducts";
import ManageOrders from "../pages/dasboard/admin/ManageOrders";
import AddProduct from "../pages/dasboard/admin/AddProduct";
import ManageProfile from "../pages/dasboard/customer/ManageProfile";
import MyOrders from "../pages/dasboard/customer/MyOrders";

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
    children: [
      {
        path: "admin/users",
        element: (
          <ProtectedRoute role="admin">
            <ManageUsers />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/manage-products",
        element: (
          <ProtectedRoute role="admin">
            <ManageProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/add-product",
        element: (
          <ProtectedRoute role="admin">
            <AddProduct />,
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/manage-orders",
        element: (
          <ProtectedRoute role="admin">
            <ManageOrders />,
          </ProtectedRoute>
        ),
      },
      {
        path: "customer/manage-profile",
        element: (
          <ProtectedRoute role="customer">
            <ManageProfile />,
          </ProtectedRoute>
        ),
      },
      {
        path: "customer/my-orders",
        element: (
          <ProtectedRoute role="customer">
            <MyOrders />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
