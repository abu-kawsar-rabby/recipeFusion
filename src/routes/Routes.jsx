import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blog from "../pages/Blog/blog";
import Chefs from "../pages/Home/Chefs";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://chefs-abu-kawsar-rabby.vercel.app/chefs")
            },
            {
                path: 'blog',
                element: <Blog></Blog>,
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>,
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chefs-abu-kawsar-rabby.vercel.app/chefs/${params.id}`)
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