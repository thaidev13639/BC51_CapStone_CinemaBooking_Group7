import Headers from "../../components/Header/Headers";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "../../css/style.css";

export default function HomeLaysOut() {

  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}
