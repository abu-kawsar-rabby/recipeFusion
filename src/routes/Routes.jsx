import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blog from "../pages/Blog/blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: 'blog',
        element: <Blog></Blog>
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register />
    },
])

export default router;