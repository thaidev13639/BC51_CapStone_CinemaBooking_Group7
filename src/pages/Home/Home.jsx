import React, { useContext, useState } from "react";

import "../../css/style.css";
import { useEffect } from "react";
import { movieService } from "../../services/movie";
import Banner from "./components/Banner/Banner";
import TabMovie from "./components/TabMovie/TabMovie";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { removeVietnameseTones } from "../../utils/removeVietnames";
import { LoadingContext } from "../../contexts/LoadingContext/LoadingContext";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState({});
  const [movieList, setMovieList] = useState([]);
   const [loadingState,setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    fetchMovieList();
  }, []);
  const fetchMovieList = async () => {
     setLoadingState({ isLoading : true});

    const result = await movieService.fetchMovieListApi();

    setMovieList(result.data.content);
    setSearch({
      keyword: "",
    });

   setLoadingState({ isLoading : false});
  };

  const handleChange = async (event) => {
    console.log(event.target.value);
    setSearch({
      keyword: event.target.value,
    });
    console.log(search.keyword);
  };

  const renderMovieList = () => {
    if (handleChange) {
      const data = movieList.filter((element) => {
        return (
          removeVietnameseTones(element.tenPhim)
            .trim()
            .toLowerCase()
            .indexOf(search.keyword) !== -1
        );
      });
      console.log(data);
      return data.map((element) => {
        return (
          <div key={element.maPhim} className="rsponsive col-3 ">
            <div
              className="card movie-card"
              
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
                <h5 className="card-title title">{element.tenPhim}</h5>
                <button
                  className="button-17"
                  role="button"
                  onClick={() => navigate(`/movie-detail/${element.maPhim}`)}
                  type="text"
                >
                  XEM CHI TIẾT
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className=" bg-cover">
      <Banner />

      <div className="py-5">
        <div className="container"> 
        <div className="search" >
          <form className="search-right">
            <input
              type="search"
              placeholder="Search không dấu"
              className="form-control"
              onChange={handleChange}
            />
          </form>
        </div>

        <div className="row mt-3 mx-auto ">{renderMovieList()}</div>
        </div>
       
        
      </div>

    
        <TabMovie />
      
    </div>
  );
}
