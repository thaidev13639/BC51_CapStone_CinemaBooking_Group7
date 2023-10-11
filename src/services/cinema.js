import axios from "axios";
import { requestApi } from "../configs/configApi";

class CinemaService {
  fetchShowtimesApi(movieId) {
    return axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    });
  }

  fetchGetHTRApi() {
    return requestApi({
      url: "/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    });
  }
  fetchGetCRCApi(maheThongRap) {
    return requestApi({
      url: `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maheThongRap}`,
      method: "GET",
    });
  }

  fetchCreateShowTime(data) {
    return requestApi({
      url: `/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data,
    });
  }
}

export const cinemaService = new CinemaService();
