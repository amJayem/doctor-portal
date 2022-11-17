import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Appointment from "../Page/Appointment/Appointment/Appointment";
import Dashboard from "../Page/Dashboard/Dashboard";
import Users from "../Page/Dashboard/Users";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            }
        ]        
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashBoardLayout/>
        </PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute>
                    <Users/>
                </AdminRoute>
            }
        ]
    }
])