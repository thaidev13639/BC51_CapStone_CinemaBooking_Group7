import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLaysOut from '../layouts/HomeLaysOut/HomeLaysOut'
import Home from '../pages/Home/Home'
import DetailMovie from '../pages/DetailMovie/DetailMovie'

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
            ]

        }
    ])
    return (
        rooting
    )
}
