import { requestApi } from "../configs/configApi";

class UserService {
  fetchGetListUserApi = () => {
    return requestApi({
      url: "/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03",
      method: "GET",
    });
  };
  fetchRegisterApi = (data) => {
    return requestApi({
      url: "/QuanLyNguoiDung/DangKy",
      method: "POST",
      data,
    });
  };
  fetLoginApi = (data) => {
    return requestApi({
      url: "/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data,
    });
  };
  fetchUserInf = (data) =>{
    return requestApi({
      url: "/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
    });
  }
}

export const userSvervice = new UserService();
