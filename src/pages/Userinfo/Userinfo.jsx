import React from 'react'
import HistoryTicket from './components/HistoryTicket/HistoryTicket'
import UpdateUserInf from './components/UpdateUserInf/UpdateUserInf'


export default function Userinfo() {
  return (
    <div className="detail ">
    <div className="container">
      <div className="row">
        <div className="col-12">
        <HistoryTicket/>
        </div>
        <div id="tabList" className="col-12 mt-5" style={{display:"none"}}>
         <UpdateUserInf/>
        </div>
      </div>
     
    </div>
  </div>
  )
}
