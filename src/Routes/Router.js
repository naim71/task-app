import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Signin from "../pages/Registration/Signin";
import Signup from "../pages/Registration/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/signin",
                element: <Signin></Signin>

            },
            {
                path: "/signup",
                element: <Signup></Signup>

            },
        ]
    }
])