import React from "react";
import TabMovie from "../Home/components/TabMovie/TabMovie";
import Detail from "./components/Detail/Detail";
import ShowTimes from "./components/ShowTimes/ShowTimes";


export default function MovieDetail() {
  return (
   <div className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-12">
       <Detail/>
      </div>
      <div className="col-12 mt-5">
        <ShowTimes/>
      </div>
    </div>
    {/* <TabMovie/> */}
  </div>
</div>


  );
}
