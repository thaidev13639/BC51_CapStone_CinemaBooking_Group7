import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AdminLaysOut() {
  return (
    <div className="row">
      <div className="col-4 ">
       <Sidebar/>
      </div>

      <div className="col-8">
        
        <Outlet />
      </div>
      <div className="col-12 "> footer </div>
    </div>
  );
}
