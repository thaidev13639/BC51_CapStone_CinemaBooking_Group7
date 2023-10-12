import { requestApi } from "../configs/configApi";

class CinemaService {
  fetchShowtimesApi(movieId) {
    return requestApi({
      url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
      method: "GET",
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
