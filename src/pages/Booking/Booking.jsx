import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ticketService } from "../../services/ticket";
import { filter, sumBy } from "lodash";
import { Alert, Button, Popconfirm, notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

export default function Booking() {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [chairList, setChairList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchTicketDetail();
  }, []);

  const fetchTicketDetail = async () => {
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
          <button
            disabled={element.daDat}
            onClick={() => handleSelect(element)}
            className={`mr-1 mb-1 seat btn ${className}`}
          >
            <FontAwesomeIcon icon={faCouch} style={{ color: "#72767e" }} />
            {element.tenGhe}
          </button>
          {(idx + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  const renderSeatList = () => {
    const data = chairList.filter((element) => element.dangChon);

    return data.map((element, idx) => {
      return (
        // <p key={element.maGhe} className="badge badge-success mr-2 mb-0">
        //   {element.tenGhe}
        // </p>
        <tr>
          <th key={element.maGhe} scope="row">
            {idx + 1}
          </th>
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
      );
    });
  };

  const renderTotalPrice = () => {
    // const data = chairList.filter((element) => element.dangChon);

    // const total = data.reduce((total, element) => {
    //   total += element.giaVe;

    //   return total;
    // }, 0);

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

    const upload = await ticketService.bookTicketApi(body);
    if (upload) {
      //navigate

      navigate(0);
      notification.success({
        message: "Đặt vé Thành Công!!",
        placement: "topRight",
        duration: 3,
      });
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <div className="py-5">
       <div className="bg-cover">
      <div className="row">
       
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-secondary">
              Seats are booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-dark">
              Seats not booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary">
              Seats are being booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning">
              VIP seats
            </div>

            <ul className="cinema-note">
              <li className="single">Ghế thường</li>
              <li className="vip">Ghế vip</li>
              <li className="choosing">Ghế đang chọn</li>
              <li className="busy">Ghế đã đặt</li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <h3 class="cinema-title">Màn hình</h3>
          <div className="cinema-wrap">
            <div style={{ width: "95%" }} className="cinema-wrap seat-scroll">
              {renderChairList()}
            </div>
          </div>
        </div>
        <div className="col-4 info-film">
          <img
            style={{ width: 300, height: 400, objectFit: "cover" }}
            src={movieDetail.hinhAnh}
            alt="#"
          />
          <h4 className="mb-0">{movieDetail.tenPhim}</h4>
          <h5 className="mb-0">
            Giờ chiếu :{movieDetail.gioChieu}
           
          </h5>
          <h5 className="mb-0">
            Ngày Chiếu :{movieDetail.ngayChieu}
           
          </h5>
          <h5>Tên cụm rạp:{movieDetail.tenCumRap}</h5>

          <table className=" table-hover invocie">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Tên ghế </th>
                <th scope="col"> Loại ghế </th>
                <th scope="col"> Tiền </th>
              </tr>
            </thead>
            <tbody>
              {renderSeatList()}

              <hr />

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
  );
}
