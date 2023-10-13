import React from 'react'
import HistoryTicket from './components/HistoryTicket/HistoryTicket'
import UpdateUserInf from './components/UpdateUserInf/UpdateUserInf'
import { Tabs } from 'antd'

export default function Userinfo() {

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: <h4 style={{color:"white"}}> Lịch sữ đặt vé </h4>,
    children:  <HistoryTicket/>,
  },
  {
    key: '2',
    label:<h4 style={{color:"white"}}> Cập nhật thông tin </h4>,
    children: <UpdateUserInf/>,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
  return (



    <div className="detail ">
    <div className="container">

    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      {/* <div className="row">
        <div className="col-12 ">
        <HistoryTicket/>
        </div>
        <div id="tabList" className="col-12 mt-5" >
         <UpdateUserInf/>
        </div>
      </div> */}
     
    </div>
  </div>
  )
}
