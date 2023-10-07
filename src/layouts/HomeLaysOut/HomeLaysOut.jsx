import React, { useEffect } from "react";
import Headers from "../../components/Header/Headers";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "../../css/style.css";

export default function HomeLaysOut() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("header-Navbar").classList.add("bg-white");

        document
          .getElementById("dropDown-Navbar")
          .classList.remove("text-white");
        document.getElementById("logo-Navbar").style.color = "black";
      } else {
        document.getElementById("header-Navbar").classList.remove("bg-white");
        document.getElementById("dropDown-Navbar").classList.add("text-white");
        document.getElementById("logo-Navbar").style.color = "#fff";
      }
    }
  }, []);
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}
