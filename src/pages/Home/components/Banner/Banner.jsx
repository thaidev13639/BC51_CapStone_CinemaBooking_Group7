import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { movieService } from "../../../../services/movie";

export default function Banner() {
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    fetchBannerList();
  }, []);

  const fetchBannerList = async () => {
    const result = await movieService.fetchMovieBannerApi();
    console.log(result);
    setBannerList(result.data.content);
  };

  const renderBannerList = () => {
    return bannerList.map((element) => {
      return (
        <div  key={element.maBanner}>
          <img className="carousel" src={element.hinhAnh} alt="" />
        </div>
      );
    });
  };
  return <Carousel autoplay>
         {renderBannerList()}
         </Carousel>;
}
