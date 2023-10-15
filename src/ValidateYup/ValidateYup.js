import { message } from "antd";
import * as yup from "yup";

const rulesUser = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;

// /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
const rulesPass =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
const rulesName =
  "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

export const validate = yup.object().shape({
  taiKhoan: yup
    .string()
    .min(5)
    .matches(rulesUser, {
      message: "(*) Vui Lòng Nhập tài khoản có số: name789",
    })
    .required("(*) Vui lòng nhập tài khoản"),
  matKhau: yup
    .string()
    .min(5)
    .matches(rulesPass, { message: "Mật khẩu còn yếu: Name@123" })
    .required("(*) Vui lòng nhập mật khẩu"),
  confirmPassWord: yup
    .string()
    .oneOf([yup.ref("matKhau"), null], "(*) Mật khẩu chưa đúng")
    .required("(*) Mật khẩu chưa đúng"),
  email: yup
    .string()
    .email("(*) Vui lòng nhập đúng email @gmail.com")
    .required("(*) Vui lòng nhập email"),
  soDt: yup.string().min(9).max(10).required("(*) Vui lòng nhập số điện thoại"),
  hoTen: yup
    .string()
    .matches(rulesName, { message: "(*) Vui lòng nhập đúng định dạng" })
    .required("(*) Vui lòng nhập họ tên"),
});

export const validationAddMovie = yup.object().shape({
  tenPhim: yup.string().required(" (*) vui lòng nhập tên phim"),
  trailer: yup.string().required(" (*) vui lòng không bỏ trống"),
  moTa: yup.string().required(" (*) vui lòng nhập mô tả"),
  ngayKhoiChieu: yup.string().required(" (*) vui lòng không bỏ trống"),
  danhGia: yup.number().min(0).max(10).required(" (*) vui lòng nhập đánh giá"),
});

export const validationAddShowTime = yup.object().shape({
  maRap: yup.string().required(" (*) vui lòng nhập mô tả"),
  ngayGioChieu: yup.string().required(" (*) vui lòng không bỏ trống"),
  giaVe: yup
    .number()
    .min(75000)
    .max(150000)
    .required(" (*) vui lòng nhập đánh giá"),
});

export const validateInfo = yup.object().shape({
 
  matKhau: yup
    .string()
    .min(5, "(*) Mật khẩu tối thiểu 5 ký tự")
    .matches(rulesPass, { message: "Mật Khẩu còn yếu: Name@123" })
    .required("(*) Vui lòng nhập mật khẩu"),

  email: yup
    .string()
    .email("(*) Vui lòng nhập đúng định dạng @gmail.com")
    .required("(*) Vui lòng nhập email"),
  soDt: yup
    .string()
    .min(9, "(*) Tối thiểu 9 số")
    .max(10, "(*) Tối đa 10 số")
    .required("(*) Vui lòng nhập số điện thoại"),
  hoTen: yup
    .string()
    .matches(rulesName, { message: "(*) Vui lòng nhập đúng định dạng" })
    .required("(*) Vui lòng nhập họ và tên"),
});


export const validateInfoAdmin = yup.object().shape({
 
  matKhau: yup
    .string()
    .min(5, "(*) Mật khẩu tối thiểu 5 ký tự")
    .matches(rulesPass, { message: "Mật Khẩu còn yếu: Name@123" })
    .required("(*) Vui lòng nhập mật khẩu"),

  email: yup
    .string()
    .email("(*) Vui lòng nhập đúng định dạng @gmail.com")
    .required("(*) Vui lòng nhập email"),
  soDt: yup
    .string()
    .min(9, "(*) Tối thiểu 9 số")
    .max(10, "(*) Tối đa 10 số")
    .required("(*) Vui lòng nhập số điện thoại"),
  hoTen: yup
    .string()
    .matches(rulesName, { message: "(*) Vui lòng nhập đúng định dạng" })
    .required("(*) Vui lòng nhập họ và tên"),
});