import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../../../services/movie";
import { formatDate } from "../../../../utils/date";
import { showHide } from "../../../../showHide";
import { LoadingContext } from "../../../../contexts/LoadingContext/LoadingContext";


export default function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState({});
  const [loadingState,setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    setLoadingState({ isLoading : true});

    const result = await movieService.fetchMovieDetailApi(params.movieId);
    
    setDetail(result.data.content);

    setLoadingState({ isLoading : false});
      
  };

  return (
    <div className="row">
      <div className="col-3">
        <img className="animate__animated animate__bounceInLeft img-detail " src={detail.hinhAnh} />
      </div>
      <div className=" animate__animated animate__bounceInLeft col-9">
        <h4>{detail.tenPhim}</h4>
        <h3 className="content">Nội dung phim</h3>
        <p>{detail.moTa}</p>
        <p>{formatDate(detail.ngayKhoiChieu)}</p>

        
          <div className="film-item-but">
            <a
              className="trailler-btn"
              href={detail.trailer}
            >
              TRAILER
            </a>
           
            <a
              className="cart-btn fontsize14"
              href="#"
              onClick={showHide}
            >
              Mua vé
            </a>
            <ul className="l-social">
              <li>Chia sẻ</li>
              <li className="l-facebook">
                <a href="#">
                  Facebook
                </a>
              </li>
              <li className="l-google">
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
