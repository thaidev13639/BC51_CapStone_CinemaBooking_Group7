import React, { useEffect } from "react";
import Headers from "../../components/Header/Headers";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "../../css/style.css";
// import "../../sticky.js";

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
        document.getElementById("header").classList.add("bg-white");

        document.getElementById("dropDown").classList.remove("text-white");
        document.getElementById("logo").style.color = "black";
      } else {
        document.getElementById("header").classList.remove("bg-white");
        document.getElementById("dropDown").classList.add("text-white");
        document.getElementById("logo").style.color = "#fff";
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
