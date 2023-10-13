import { requestApi } from "../configs/configApi";

class MovieService {
  fetchMovieListApi() {
    return requestApi({
      url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP12",
      method: "GET",
    });
  }

  fetchMovieBannerApi() {
    return requestApi({
      url: "/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
      
    });
  }

  fetchMovieDetailApi(movieId) {
    return requestApi({
      url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
      method: "GET",
      
    });
  }

  fetchMovieTabApi() {
    return requestApi({
      url: "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP12",
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
