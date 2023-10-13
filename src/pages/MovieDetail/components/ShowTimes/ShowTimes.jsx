import React, { useEffect, useState } from "react";
import { cinemaService } from "../../../../services/cinema";
import { Link, useParams } from "react-router-dom";
import { Tabs } from "antd";
import { formatDate } from "../../../../utils/date";
import { useContext } from "react";
import { LoadingContext } from "../../../../contexts/LoadingContext/LoadingContext";

export default function ShowTimes() {
  const params = useParams();
  const [data, setData] = useState([]);
  const TabPane = Tabs.TabPane;
 // const [loadingState,setLoadingState] = useContext(LoadingContext);
  

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const fetchShowtimes = async () => {
   // setLoadingState({ isLoading : true});

    const result = await cinemaService.fetchShowtimesApi(params.movieId);
    console.log(result);
    setData(result.data.content.heThongRapChieu);
   // setLoadingState({ isLoading : false});
  };

  const renderTabList = () => {
    return data.map((element, idx) => {
      return (
        <TabPane

          tab={
            <a
              key={element.maHeThongRap}
              // className={`nav-link  text-capitalize ${idx === 0 && "active"}`}
              className="nameCinema"
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
                  <span className="text-white">{element.diaChi}</span>
                </div>
                <div className="col-12">
                  <div className="row">
                    {element.lichChieuPhim.map((element) => {
                      return (
                        <div key={element.maRap} className="col-3">
                          <Link  className="timeDate text-primary" to={`/booking/${element.maLichChieu}`}>
                            {formatDate(element.ngayChieuGioChieu)}
                          </Link>
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

 

  return (
    <div className="animate__animated animate__bounce animate__repeat-2 mb-5">
      <Tabs tabPosition="left" style={{ height: 220 }}>
        {renderTabList()}
      </Tabs>
    </div>

   
  );
}
