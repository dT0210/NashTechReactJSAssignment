import { useRoutes } from "react-router-dom"
import Posts from "../pages/Posts"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Home from "../pages/Home"
import RequiredAuth from "../components/RequiredAuth"
import React, { Suspense } from "react"

const LoginLazy = React.lazy(
    () => import("../pages/Login")
);

const AppRoutes = () => {
    const elements = useRoutes(
        [
            {path: '/', element: <Home/>},
            {path: '/posts', element: <Posts/>},
            // {path: '/posts:id', element: <PostDetails/>},
            {
                path: '/login', 
                element: 
                    <Suspense>
                        <LoginLazy/>
                    </Suspense>
            },
            {
                path: '/profile', 
                element: 
                    <RequiredAuth>
                        <Profile/>
                    </RequiredAuth>
            }
        ]
    );
    return elements;
}

export default AppRoutes;