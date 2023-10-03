import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLaysOut from "../layouts/HomeLaysOut/HomeLaysOut";
import Home from "../pages/Home/Home";
import AdminLaysOut from "../layouts/AdminLaysOut/AdminLaysOut";
import Admin from "../pages/Admin/Admin";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Login from "../components/Login/Login";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Register from "../components/Register/Register";

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
          path: "/movie-detail/:movieId",
          element: <MovieDetail />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLaysOut />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
    {
      path: "/form",
      element: <LoginLayout />,
      children: [
        {
          path: "/form/login",
          element: <Login />,
        },
        {
          path: "/form/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return rooting;
}
