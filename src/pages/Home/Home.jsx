import React, { useState } from "react";

import "../../css/style.css";
import { useEffect } from "react";
import { movieService } from "../../services/movie";
import Banner from "./components/Banner/Banner";
import { Button } from "antd/es/radio";
import TabMovie from "./components/TabMovie/TabMovie";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetchMovieList();
    // fetchBannerList();
  }, []);

  const fetchMovieList = async () => {
    const result = await movieService.fetchMovieListApi();
    setMovieList(result.data.content);
  };


  const renderMovieList = () => {
    return movieList.map((element) => {
      return (
        <div key={element.maPhim} className="col-3">
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: "cover" }}
              className="card-img-top"
              src={element.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{element.tenPhim}</h5>
              <Button type="dashed">XEM CHI TIẾT </Button>
              <div className="rating">
                <input name="stars" type="radio" />
                <label>☆</label>
                <input name="stars" type="radio" />
                <label>☆</label>
                <input name="stars" type="radio" />
                <label>☆</label>
                <input name="stars" type="radio" />
                <label>☆</label>
                <input name="stars" type="radio" />
                <label>☆</label>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  
  return (
    <div>Home</div>
  )
}
