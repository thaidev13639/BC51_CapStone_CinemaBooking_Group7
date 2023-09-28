import axios from "axios";

class MovieService {
    fetchMovieListApi() {
        return axios({
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04",
            method: "GET",
            headers: {
                TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY"
            },
        });

    }
    fetchMovieDetailApi() {

    }
}

export const movieService = new MovieService();