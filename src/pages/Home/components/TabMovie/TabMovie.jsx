import { Tabs } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { movieService } from "../../../../services/movie";
import { NavLink } from "react-router-dom";
import { formatDate } from "../../../../utils/date";

export default function TabMovie() {
  const TabPane = Tabs.TabPane;
  const [tabList, setTabList] = useState([]);
  useEffect(() => {
    fetchTabList();
  }, []);

  const fetchTabList = async () => {
    const result = await movieService.fetchMovieTabApi();
    console.log(result);
    setTabList(result.data.content);
  };

  const renderTabList = () => {
    return tabList.map((heThongRap, idx) => {
      return (
        <TabPane tab={<img className="logo" src={heThongRap.logo} />} key={idx}>
          <Tabs tabPosition="left">
            {heThongRap.lstCumRap.map((cumRap, idx) => {
              return (
                <TabPane
                  tab={
                    <div style={{ display: "flex" }}>
                      <img className="mr-3" src={heThongRap.logo} width="60" />
                      <div className="text-left">
                        {" "}
                        {cumRap.tenCumRap}
                        <p> chitiet</p>{" "}
                      </div>
                    </div>
                  }
                  key={idx}
                >
                  {/* load phim tuong ung */}
                  {cumRap.danhSachPhim.map((phim, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div className="my-2">
                          <div style={{ display: "flex" }}>
                            <img
                              width={120}
                              height={150}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              onError={(e) => {e.target.onError = null;e.target ="https://www.computerhope.com/jargon/e/error.png"}}

                            />
                            <div className="ml-2 mt-2">
                              <h5 className="text-success">
                                {phim.tenPhim}
                              </h5>
                              <p> {cumRap.diaChi}</p>
                              
                                <div className="dateMovie">
                                  
                                {phim.lstLichChieuTheoPhim.slice(0, 15).map((lichChieu,idx)=>{
                                return <NavLink className="text-datetab" to="/" key={idx}>
                                    {formatDate(lichChieu.ngayChieuGioChieu)}
                                </NavLink>
                              })}
                                   
                             
                                 </div>
                             
                            </div>
                          </div>
                        </div>

                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div className="container bg-white p-4">
      <Tabs tabPosition="left">
        {/* <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
         */}
        {renderTabList()}
      </Tabs>
    </div>
  );
}
