import React from "react";
import TabMovie from "../Home/components/TabMovie/TabMovie";
import Detail from "./components/Detail/Detail";
import ShowTimes from "./components/ShowTimes/ShowTimes";
// import 'animate.css'

export default function MovieDetail() {
  return (
   <div className="detail ">
  <div className="container">
    <div className="row">
      <div className="col-12">
       <Detail/>
      </div>
      <div id="tabList" className="col-12 mt-5">
        <ShowTimes/>
      </div>
    </div>
    {/* <TabMovie/> */}
  </div>
</div>


  );
}
