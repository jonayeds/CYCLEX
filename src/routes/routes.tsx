import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import AllBiCycles from "../pages/AllBiCycles";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardMain from "../pages/DashboardMain";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/all-bicycles",
                element:<AllBiCycles/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/dashboard",
                element:<DashboardMain/>
            },
        ],
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])