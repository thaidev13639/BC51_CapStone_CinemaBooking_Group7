import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../../../services/movie";
import { formatDate } from "../../../../utils/date";
import { showHide } from "../../../../showHide";


export default function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    const result = await movieService.fetchMovieDetailApi(params.movieId);
    console.log(result);
    setDetail(result.data.content);
  };

  return (
    <div className="row">
      <div className="col-3">
        <img className="animate__animated animate__bounceInLeft  w-100" src={detail.hinhAnh} />
      </div>
      <div className=" animate__animated animate__bounceInLeft col-9">
        <h4>{detail.tenPhim}</h4>
        <h3 className="content">Nội dung phim</h3>
        <p>{detail.moTa}</p>
        <p>{formatDate(detail.ngayKhoiChieu)}</p>

        
          <div class="film-item-but">
            <a
              class="trailler-btn"
              href={detail.trailer}
            >
              TRAILER
            </a>
           
            <a
              class="cart-btn fontsize14"
              href="#"
              onClick={showHide}
            >
              Mua vé
            </a>
            <ul class="l-social">
              <li>Chia sẻ</li>
              <li class="l-facebook">
                <a href="#">
                  Facebook
                </a>
              </li>
              <li class="l-google">
                <a href="#">
                  Google
                </a>
              </li>
            </ul>
          </div>
        
         


      </div>
    </div>
  );
}
