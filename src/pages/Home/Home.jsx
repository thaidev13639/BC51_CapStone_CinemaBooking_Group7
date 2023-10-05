import React, { useState } from "react";

import "../../css/style.css";
import { useEffect } from "react";
import { movieService } from "../../services/movie";
import Banner from "./components/Banner/Banner";
import { Button } from "antd/es/radio";
import TabMovie from "./components/TabMovie/TabMovie";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetchMovieList();
    // fetchBannerList();
  }, []);

  const fetchMovieList = async () => {
    const result = await movieService.fetchMovieListApi();
    console.log(result);
    setMovieList(result.data.content);
  };

  console.log(movieList);
  const renderMovieList = () => {
    return movieList.map((element) => {
      return (
        <div key={element.maPhim} className="col-3">
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <div className="movie-image">
              <img
                style={{ height: 350, objectFit: "cover" }}
                className="card-img-top"
                src={element.hinhAnh}
                alt="movie"
              />
              <div className="entry-hover">
                <div className="entry-actions">
                  <a
                    href="https://vimeo.com/28177848"
                    className="btn-trailers video-player"
                  >
                    watch trailer
                  </a>
                  <a href="#order" className="btn-ticket order_btn">
                    <FontAwesomeIcon
                      className="logo-cart"
                      icon={faCartShopping}
                    />
                    buy ticket
                  </a>
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

            <div className="card-body">
              <h6 className="card-title">{element.tenPhim}</h6>
              <Button
                onClick={() => navigate(`/movie-detail/${element.maPhim}`)}
                type="dashed"
              >
                XEM CHI TIẾT{" "}
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className=" bg-cover">
      <Banner />

      <div className="py-5">
        <div className="row mt-3 mx-auto w-75">{renderMovieList()}</div>
      </div>

      <TabMovie />
    </div>
  );
}
