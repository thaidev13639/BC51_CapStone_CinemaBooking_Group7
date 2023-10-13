import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLaysOut from "../layouts/HomeLaysOut/HomeLaysOut";
import Home from "../pages/Home/Home";
import AdminLaysOut from "../layouts/AdminLaysOut/AdminLaysOut";
import AdminCreateShowTime from "../pages/Admin/ComponentAdmin/AdminShowTime/AdminCreateShowTime";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Login from "../components/Login/Login";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Register from "../components/Register/Register";
import AdminUser from "../pages/Admin/ComponentAdmin/AdminUser/AdminUser";
import AdminGuard from "../guards/AdminGuard";
import NoAuthGuard from "../guards/NoAuthGuard";
import AdminDetailFirm from "../pages/Admin/ComponentAdmin/AdminShowTime/AdminDetailFirm";
import AdminCreateFilm from "../pages/Admin/ComponentAdmin/AdminShowTime/AdminCreateFilm";
import AuthGuard from "../guards/AuthGuard";
import Booking from "../pages/Booking/Booking";
import AdminEditFilm from "../pages/Admin/ComponentAdmin/AdminShowTime/AdminEditFlim";
import Userinfo from "../pages/Userinfo/Userinfo";

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
        {
          path: "/booking/:id",
          element: (
            <AuthGuard>
              <Booking />
            </AuthGuard>
          ),
        },
        {
          path: "/thongtincanhan",
          element: <Userinfo />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <AdminGuard>
          <AdminLaysOut />
        </AdminGuard>
      ),
      children: [
        {
          path: "/admin/detail-film",
          element: <AdminDetailFirm />,
        },
        {
          path: "/admin/user",
          element: <AdminUser />,
        },
        {
          path: "/admin/add-film",
          element: <AdminCreateFilm />,
        },
        {
          path: "/admin/edit-film/:id",
          element: <AdminEditFilm />,
        },
        {
          path: "/admin/create-show-time/:id/:tenPhim",
          element: <AdminCreateShowTime />
        },
      ],
    },
    {
      path: "/form",
      element: (
        <NoAuthGuard>
          <LoginLayout />
        </NoAuthGuard>
      ),
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
