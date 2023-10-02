import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "../../css/style.css";
import "../../sticky.js";

export default function HomeLaysOut() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
