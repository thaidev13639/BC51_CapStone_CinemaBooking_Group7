import React from "react";
import Detail from "./components/Detail/Detail";
import ShowTimes from "./components/ShowTimes/ShowTimes";
 import 'animate.css'

export default function MovieDetail() {
  return (
   <div className="detail mb-3 ">
  <div className="container">
    <div className="row">
      <div className="col-12 ">
       <Detail/>
      </div>
      <div id="tabList" className="col-12 mt-5" style={{display:"none"}} >
        <ShowTimes/>
      </div>
    </div>
   
  </div>
</div>


  );
}
