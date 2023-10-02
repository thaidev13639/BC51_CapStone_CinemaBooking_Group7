import React, { useEffect, useState } from "react";
import { cinemaService } from "../../../../services/cinema";
import { Link, useParams } from "react-router-dom";
import { Tabs } from "antd";
import { formatDate } from "../../../../utils/date";

export default function ShowTimes() {
  const params = useParams();
  const [data, setData] = useState([]);
  const TabPane = Tabs.TabPane;
  // const [tabList, setTabList] = useState([]);

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const fetchShowtimes = async () => {
    const result = await cinemaService.fetchShowtimesApi(params.movieId);
    console.log(result);
    setData(result.data.content.heThongRapChieu);
  };

  // const renderTabList = () => {
  //   return data.map((element, idx) => {
  //     return (
  //       <a
  //         key={element.maHeThongRap}
  //         className={`nav-link text-capitalize ${idx === 0 && "active"}`}
  //         data-toggle="pill"
  //         href={`#${element.maHeThongRap}`}
  //         role="tab"
  //         aria-selected="true"
  //       >
  //         {element.tenHeThongRap}
  //       </a>
  //     );
  //   });
  // };

  const renderTabList = () => {
    return data.map((element, idx) => {
      return (
        <TabPane

          tab={
            <a
              key={element.maHeThongRap}
              // className={`nav-link  text-capitalize ${idx === 0 && "active"}`}
              data-toggle="pill"
              href={`#${element.maHeThongRap}`}
              role="tab"
              aria-selected="true"
            >
              <img className="logo" src={element.logo} />
              {element.tenHeThongRap}
            </a>
          }
          key={element.maHeThongRap}
          className={`tab-pane fade show ${idx === 0 && "active"}`}
          id={element.maHeThongRap}
           role="tabpanel"
        >
       
        
            
          {element.cumRapChieu.map((element) => {
            return (
              <div key={element.maCumRap} className="row mb-5">
                <div className="col-1">
                  <img className="img-fluid rounded" src={element.hinhAnh} />
                </div>
                <div className="col-11 pl-0">
                  <h5>{element.tenCumRap}</h5>
                  <span className="text-muted">{element.diaChi}</span>
                </div>
                <div className="col-12">
                  <div className="row">
                    {element.lichChieuPhim.map((element) => {
                      return (
                        <div key={element.maRap} className="col-3">
                          <a href="#">
                            {formatDate(element.ngayChieuGioChieu)}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          
        
        </TabPane>
      );
    });
  };

  // const renderTabContent = () => {
  //   return data.map((element, idx) => {
  //     return (
  //       <div
  //         key={element.maHeThongRap}
  //         className={`tab-pane fade show ${idx === 0 && "active"}`}
  //         id={element.maHeThongRap}
  //          role="tabpanel"
  //       >
  //         {element.cumRapChieu.map((element) => {
  //           return (
  //             <div key={element.maCumRap} className="row mb-5">
  //               <div className="col-1">
  //                 <img className="img-fluid rounded" src={element.hinhAnh} />
  //               </div>
  //               <div className="col-11 pl-0">
  //                 <h5>{element.tenCumRap}</h5>
  //                 <span className="text-muted">{element.diaChi}</span>
  //               </div>
  //               <div className="col-12">
  //                 <div className="row">
  //                   {element.lichChieuPhim.map((element) => {
  //                     return (
  //                       <div key={element.maRap} className="col-3">
  //                         <a href="#">
  //                           {formatDate(element.ngayChieuGioChieu)}
  //                         </a>
  //                       </div>
  //                     );
  //                   })}
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className=" mb-5">
      <Tabs tabPosition="left" style={{ height: 220 }}>
        {renderTabList()}
      </Tabs>
    </div>

    //   <div className="row">
    //   <div className="col-3">
    //     <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    //       <a className="nav-link text-capitalize active" data-toggle="pill" href="#galaxy" role="tab" aria-selected="true">Galaxy Cinema</a>
    //       <a className="nav-link text-capitalize" data-toggle="pill" href="#bhd" role="tab" aria-selected="false">BHD Star</a>
    //     </div>
    //   </div>
    //   <div className="col-9">
    //     <div className="tab-content" id="v-pills-tabContent">
    //       <div className="tab-pane fade show active" id="galaxy" role="tabpanel">
    //         <div className="row mb-5">
    //           <div className="col-1">
    //             <img className="img-fluid rounded" src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" />
    //           </div>
    //           <div className="col-11 pl-0">
    //             <h5>Galaxy Cinema Cineplex - 3/2</h5>
    //             <span className="text-muted">L5-Vincom 3/2, 3C Đường 3/2, Q.10</span>
    //           </div>
    //           <div className="col-12">
    //             <div className="row">
    //               <div className="col-3">
    //                 <a href>2022-12-12T09:30:00</a>
    //               </div>
    //               <div className="col-3">
    //                 <a href>2022-12-12T09:30:00</a>
    //               </div>
    //               <div className="col-3">
    //                 <a href>2022-12-12T09:30:00</a>
    //               </div>
    //               <div className="col-3">
    //                 <a href>2022-12-12T09:30:00</a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row mb-5">
    //           <div className="col-1">
    //             <img className="img-fluid rounded" src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" />
    //           </div>
    //           <div className="col-11 pl-0">
    //             <h5>Galaxy Cinema Cineplex - Vincom Thảo Điền</h5>
    //             <span className="text-muted">L5-Megamall, 159 XL Hà Nội, Q.2</span>
    //           </div>
    //           <div className="col-12">
    //             <div className="row">
    //               <div className="col-3">
    //                 <a href>2022-12-12T09:30:00</a>
    //               </div>
    //               <div className="col-3">
    //                 <a href>2022-05-12T18:12:23</a>
    //               </div>
    //               <div className="col-3">
    //                 <a href>2022-05-12T18:12:23</a>
    //               </div>
    //               <div className="col-3">
    //                 <a href>2022-05-12T18:12:23</a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="tab-pane fade" id="bhd" role="tabpanel">...</div>
    //     </div>
    //   </div>
    // </div>
  );
}
