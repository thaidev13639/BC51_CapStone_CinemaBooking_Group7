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
    .matches(rulesUser, { message: "Pls! enter valid account: name789" })
    .required("Pls! enter account"),
  matKhau: yup
    .string()
    .min(5)
    .matches(rulesPass, { message: "Pls! create strong password: Name@123" })
    .required("Pls! enter password"),
  confirmPassWord: yup
    .string()
    .oneOf([yup.ref("matKhau"), null], "password not matched")
    .required("Password not match"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Plss! enter email"),
  soDt: yup.string().min(9).max(10).required("Pls! enter phone number"),
  hoTen: yup
    .string()
    .matches(rulesName, { message: "please enter valid Name" })
    .required("Pls! enter fullname"),
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
