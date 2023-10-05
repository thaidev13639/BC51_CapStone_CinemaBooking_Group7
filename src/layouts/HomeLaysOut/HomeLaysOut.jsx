import React from "react";
import Headers from "../../components/Header/Headers";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "../../css/style.css";
import "../../sticky.js";

export default function HomeLaysOut() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}
