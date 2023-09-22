import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLaysOut from '../layouts/HomeLaysOut/HomeLaysOut'
import Home from '../pages/Home/Home'
import DetailMovie from '../pages/DetailMovie/DetailMovie'
import AdminLaysOut from '../layouts/AdminLaysOut/AdminLaysOut'
import Admin from '../pages/Admin/Admin'


export default function Router() {
    const rooting = useRoutes([
        {
            path: "/",
            element: <HomeLaysOut />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/movie_detail",
                    element: <DetailMovie />
                },
               
            ],
         

        },
        {
            path: "/admin",
            element:<AdminLaysOut />,
            children: [
                {
                    path: "/admin",
                    element: <Admin/>

                },
            ],
        }
    ])
    return (
        rooting
    )
}
