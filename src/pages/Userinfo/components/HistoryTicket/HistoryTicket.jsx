import React, { useContext, useEffect, useState } from "react";
import { userSvervice } from "../../../../services/user";
import { Tabs } from "antd";
import { formatDate } from "../../../../utils/date";
import { LoadingContext } from "../../../../contexts/LoadingContext/LoadingContext";

export default function HistoryTicket() {
  const [data, setData] = useState([]);
  const TabPane = Tabs.TabPane;
  const [loadingState,setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    setLoadingState({ isLoading : true});

    const result = await userSvervice.fetchUserTicket();
    console.log(result.data.content);
    setData(result.data.content.thongTinDatVe);

    setLoadingState({ isLoading : false});
  };

  const renderTabList = () => {
    return data.map((element, idx) => {
      return (
        <TabPane
          tab={
            <a
             
              className="nameCinema"
              data-toggle="pill"
               href={`#${element.tenPhim}`}
              role="tab"
              aria-selected="true"
            >
              <img className="img-ticket" src={element.hinhAnh} />
            </a>
          }
           key={element.maVe}
          className={`tab-pane fade show ${idx === 0 && "active"}`}
           id={element.tenPhim}
          role="tabpanel"
        >
          {element.danhSachGhe.map((ghe) => {
            return (
              <div key={ghe.maGhe} className="row mb-5 history-right">
                <div className="col-2 pr-2" >
                  <img
                    className="img-cinema rounded"
                    src="https://as2.ftcdn.net/v2/jpg/02/01/19/07/1000_F_201190712_1fxYTqiaQLEo8rUAimPp8yASSpMv7zRy.jpg"
                  />
                </div>
                <div className="col-10">
                  <h5>{ghe.maHeThongRap}</h5>
                  <span className="text-white">{ghe.tenHeThongRap}</span>
                  <br />
                    <a className="timeDate text-white  ">
                    {formatDate(element.ngayDat)}
                  </a>
                </div>
                <div className="col-12">
                  
                </div>
              </div>
            );
          })}
        </TabPane>
      );
    });
  };

  return (
    <div className=" mb-5 bg-dark p-4 tab-cinema">
      <Tabs tabPosition="left" style={{ height: 500}}>
        {renderTabList()}
      </Tabs>
    </div>
  );
}
