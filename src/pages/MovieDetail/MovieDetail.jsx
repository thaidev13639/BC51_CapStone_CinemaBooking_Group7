import React from "react";
import TabMovie from "../Home/components/TabMovie/TabMovie";


export default function MovieDetail() {
  return (
   <div className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <img className="w-100" src="https://cinestar.com.vn/pictures/Cinestar/07-2022/minion.jpg" />
          </div>
          <div className="col-9">
            <h4>Minion</h4>
            <p>
              Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con
              khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới
              loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật
              to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay
              trước mắt, thậm chí còn có thể chạm tới
            </p>
            <p>2022-05-10T00:00:00</p>
            <div>
              <button className="btn btn-info mr-2">TRAILER</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-5">
        <div className="row">
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link text-capitalize active" data-toggle="pill" href="#galaxy" role="tab" aria-selected="true">Galaxy Cinema</a>
              <a className="nav-link text-capitalize" data-toggle="pill" href="#bhd" role="tab" aria-selected="false">BHD Star</a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="galaxy" role="tabpanel">
                <div className="row mb-5">
                  <div className="col-1">
                    <img className="img-fluid rounded" src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" />
                  </div>
                  <div className="col-11 pl-0">
                    <h5>Galaxy Cinema Cineplex - 3/2</h5>
                    <span className="text-muted">L5-Vincom 3/2, 3C Đường 3/2, Q.10</span>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-3">
                        <a href>2022-12-12T09:30:00</a>
                      </div>
                      <div className="col-3">
                        <a href>2022-12-12T09:30:00</a>
                      </div>
                      <div className="col-3">
                        <a href>2022-12-12T09:30:00</a>
                      </div>
                      <div className="col-3">
                        <a href>2022-12-12T09:30:00</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-1">
                    <img className="img-fluid rounded" src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" />
                  </div>
                  <div className="col-11 pl-0">
                    <h5>Galaxy Cinema Cineplex - Vincom Thảo Điền</h5>
                    <span className="text-muted">L5-Megamall, 159 XL Hà Nội, Q.2</span>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-3">
                        <a href>2022-12-12T09:30:00</a>
                      </div>
                      <div className="col-3">
                        <a href>2022-05-12T18:12:23</a>
                      </div>
                      <div className="col-3">
                        <a href>2022-05-12T18:12:23</a>
                      </div>
                      <div className="col-3">
                        <a href>2022-05-12T18:12:23</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="bhd" role="tabpanel">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TabMovie/>
  </div>
</div>


  );
}
