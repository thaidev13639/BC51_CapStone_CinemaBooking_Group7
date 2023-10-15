import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ticketService } from "../../services/ticket";
import { filter, sumBy } from "lodash";
import {  Button, Popconfirm, notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { LoadingContext } from "../../contexts/LoadingContext/LoadingContext";


export default function Booking() {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [chairList, setChairList] = useState([]);
  const [loadingState, setLoadingState] = useContext(LoadingContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTicketDetail();
  }, []);

  const fetchTicketDetail = async () => {
    setLoadingState({ isLoading: true });
    const result = await ticketService.fetchTicketDetailApi(params.id);
    setMovieDetail(result.data.content.thongTinPhim);
    setChairList(
      result.data.content.danhSachGhe.map((element) => {
        // element.dangChon = false;

        // return element;

        // thêm thuộc tính dangChon vào element
        return {
          ...element,
          dangChon: false,
        };
      })
    );
    console.log(result);
    setLoadingState({ isLoading: false });
  };
  const handleSelect = (chair) => {
    const data = [...chairList];

    const idx = data.findIndex((element) => element.maGhe === chair.maGhe);

    data[idx].dangChon = !data[idx].dangChon;

    setChairList(data);
  };
  const renderChairList = () => {
    return chairList.map((element, idx) => {
      let className = "btn-dark";

      if (element.loaiGhe === "Vip") {
        className = "btn-warning";
      }

      if (element.dangChon) {
        className = "btn-primary";
      }

      return (
        
        
        <React.Fragment key={element.maGhe}>
         <td>
            <button
              disabled={element.daDat}
              onClick={() => handleSelect(element)}
              className={`mr-1 mb-1 seat btn ${className}`}
            >
              <FontAwesomeIcon icon={faCouch} style={{ color: "#72767e" }} />
              {element.tenGhe}
            </button>
            
            </td>
          {(idx + 1) % 16 === 0 && <br />}
        </React.Fragment>
        
      );
    });
  };

  const renderSeatList = () => {
    const data = chairList.filter((element) => element.dangChon);

    return data.map((element, idx) => {
      return (
        <React.Fragment key={element.maGhe}>
          <tr>
            <th scope="row">{idx + 1}</th>
            <td>
              <p className="badge badge-success mr-2 mb-0">{element.tenGhe}</p>
            </td>
            <td>{element.loaiGhe}</td>
            <td>
              {element.giaVe.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </td>
            <i onClick={() => handleSelect(element)} className="delete-seat">
              &#x274C;
            </i>
          </tr>
        </React.Fragment>
      );
    });
  };

  const renderTotalPrice = () => {
    const data = filter(chairList, "dangChon");
    const total = sumBy(data, "giaVe");

    return total.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    const data = filter(chairList, "dangChon");

    const body = {
      maLichChieu: +params.id,
      danhSachVe: data.map((element) => {
        return {
          maGhe: element.maGhe,
          giaVe: element.giaVe,
        };
      }),
    };

   const result = await ticketService.bookTicketApi(body);

    //navigate
if(result){
  notification.success({
    message: "Đặt vé Thành Công!!",
    placement: "topRight",
    duration: 5,
  });
}
navigate(0);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <div className="bg-cover">
      <div className="py-5 ">
        <div className="row  invoice-content">
          <div className="col-8 mt-4 mb-4">
            <div style={{ width: "95%" }} className="mx-auto description ">
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-secondary description-child">
                <FontAwesomeIcon icon={faCouch} style={{ color: "#454952" }} />{" "}
                <br />
                Ghế chưa đặt
              </div>
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-dark description-child">
                <FontAwesomeIcon icon={faCouch} style={{ color: "#72767e" }} />{" "}
                <br />
                Ghế đã đặt
              </div>
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary description-child">
                <FontAwesomeIcon icon={faCouch} style={{ color: "#72767e" }} />{" "}
                <br />
                Ghế đang chọn
              </div>
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning description-child">
                <FontAwesomeIcon icon={faCouch} style={{ color: "#72767e" }} />{" "}
                <br />
                Ghế VIP
              </div>
            </div>
          </div>
          <div className="col-8">
            <h3 className="cinema-title">Màn hình</h3>
            <div className="cinema-wrap">
          
                {renderChairList()} 
                
              </div>
          </div>
          <div className="col-4 ">
            <div className="info-film">
              <img className="img-booking" src={movieDetail.hinhAnh} alt="#" />
              <div className="title-invoice">
                <h3 className="title-movi mb-0">{movieDetail.tenPhim}</h3>
                <p className="mb-0">Giờ chiếu :{movieDetail.gioChieu}</p>
                <p className="mb-0">Ngày Chiếu :{movieDetail.ngayChieu}</p>
                <p>Tên cụm rạp:{movieDetail.tenCumRap}</p>
              </div>

              <table className=" table-hover invocie">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Tên ghế || </th>
                    <th scope="col"> Loại ghế || </th>
                    <th scope="col"> Tiền </th>
                  </tr>
                </thead>
                <tbody>
                  {renderSeatList()}

                  <tr>
                    <th scope="row">Tỗng tiền</th>
                    <td> </td>
                    <td> </td>

                    <td>{renderTotalPrice()}</td>
                  </tr>
                </tbody>
              </table>

              <Popconfirm
                title="Thông Báo"
                description="Bạn chắc chắn muốn đặt ?"
                open={open}
                onConfirm={handleOk}
                okButtonProps={{
                  loading: confirmLoading,
                }}
                onCancel={handleCancel}
              >
                <Button type="primary" onClick={showPopconfirm}>
                  BOOK
                </Button>
              </Popconfirm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
