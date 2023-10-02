import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../../../services/movie";
import { formatDate } from "../../../../utils/date";

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
        <img
          className="w-100"
          src={detail.hinhAnh} />
      </div>
      <div className="col-9">
        <h4>{detail.tenPhim}</h4>
        <p>{detail.moTa}</p>
        <p>{formatDate(detail.ngayKhoiChieu)}</p>
        <div>
          <button className="btn btn-info mr-2"> <a> TRAILER</a></button>
         
        </div>
      </div>
    </div>
  );
}
