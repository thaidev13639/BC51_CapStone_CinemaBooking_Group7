import axios from "axios";
import { requestApi } from "../configs/configApi";

class MovieService {
  fetchMovieListApi() {
    return axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    });
  }

  fetchMovieBannerApi() {
    return axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    });
  }

  fetchMovieDetailApi(movieId) {
    return axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    });
  }

  fetchMovieTabApi() {
    return requestApi({
      url: "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03",
      method: "GET",
    });
  }

  fetchAddFilmApi(data) {
    return requestApi({
      url: "/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data,
    });
  }

  fetchEditFilmApi(data) {
    return requestApi({
      url: "/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data,
    });
  }

  fetchDeleteFilmApi(maphim) {
    return requestApi({
      url: `/QuanLyPhim/XoaPhim?MaPhim=${maphim}`,
      method: "DELETE",
    });
  }
}

export const movieService = new MovieService();
