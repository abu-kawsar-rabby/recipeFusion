import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blog from "../pages/Blog/blog";
import Chefs from "../pages/Home/Chefs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'blog',
                element: <Blog></Blog>,
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>,
                loader: () => fetch("https://chefs-abu-kawsar-rabby.vercel.app/chefs"),
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    },

])

export default router;