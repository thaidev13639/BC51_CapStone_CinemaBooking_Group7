import { requestApi } from "../configs/configApi";

class UserService {
  fetchGetListUserApi = (tuKhoa) => {
    if (tuKhoa !== "") {
      return requestApi({
        url: `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP00&tuKhoa=${tuKhoa}`,
        method: "GET",
      });
    }
    return requestApi({
      url: `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP00`,
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
  fetchUserTicket = () => {
    return requestApi({
      url: "/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
    });
  };

  fetchUserInfo = (data) => {
    return requestApi({
      url: "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data,
    });
  };
  fetchUserDetailApi(username) {
    return requestApi({
      url: `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${username}`,
      method: "POST",
    });
  }
  fetchUserDeleteApi(taiKhoan) {
    return requestApi({
      url: `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
    });
  }
  fetchUserUpdateApi(data) {
    return requestApi({
      url: `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "POST",
      data,
    });
  }
}

export const userSvervice = new UserService();
