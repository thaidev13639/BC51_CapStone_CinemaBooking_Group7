import React, { useState } from "react";
import { Radio, Tabs } from "antd";
import { Carousel } from "antd";
import "../../css/style.css";
import { useEffect } from "react";
import { movieService } from "../../services/movie";

export default function Home() {

  const [movieList,setMovieList] = useState([]);
  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const result = await movieService.fetchMovieListApi();
    setMovieList(result.data.content);
  };

  const [mode, setMode] = useState("top");
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const renderMovieList =() => {
    return movieList.map((element) =>{
      return (
        <div key={element.maPhim}  className="col-3">
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
                <button className="btn btn-info">XEM CHI TIẾT</button>
              </div>
            </div>
          </div>
      );
    });
  }
  return (
    <div>
      <Carousel>
        <div>
          <img
            className="carousel"
            src="https://image.tmdb.org/t/p/original/68LlC1D6CThvrDiLvaqAmlz3wLp.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="carousel"
            src="https://gategame.vn/wp-content/uploads/2023/04/Super-Mario-Bros.-The-Movie.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="carousel"
            src="https://www.bay939.com.au/wp-content/uploads/sites/31/2023/02/20230213-flash-trailer-batman_feature.jpg?w=1200"
            alt=""
          />
        </div>
        <div>
          <img
            className="carousel"
            src="https://assetscdn1.paytm.com/images/cinema/Jailer-1035%E2%80%8A%C3%97%E2%80%8A420-bf3ab7e0-2d64-11ee-b34d-05fa8644d6a7.jpg"
            alt=""
          />
        </div>
      </Carousel>

      <div className="py-5">
        <div className="row mt-3 mx-auto w-75">
         {renderMovieList()}
          
        </div>
      </div>

      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
          height: 220,
        }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      />
    </div>
  );
}
