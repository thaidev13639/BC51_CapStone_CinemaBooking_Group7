import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../../components/Header/Headers";

export default function LoginLayout() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}
