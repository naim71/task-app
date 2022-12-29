import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Signin from "../pages/Registration/Signin";
import Signup from "../pages/Registration/Signup";
import AddTask from "../pages/Task/AddTask/AddTask";
import AllTasks from "../pages/Task/MyTask/AllTasks";
import CompletedTask from "../pages/Task/MyTask/CompletedTask";

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
            {
                path: "/add",
                element: <AddTask></AddTask>

            },
            {
                path: "/mytask",
                element: <AllTasks></AllTasks>

            },
            {
                path: "/completedtask",
                element: <CompletedTask></CompletedTask>

            },
        ]
    }
])