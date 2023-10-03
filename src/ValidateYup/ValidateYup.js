import * as yup from "yup";

const rulesUser = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
const rulesPass =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
const rulesName =
  "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

export const validate = yup.object().shape({
  account: yup
    .string()
    .min(5)
    .matches(rulesUser, { message: "Pls! create account stronger" })
    .required("Pls! enter account"),
  matKhau: yup
    .string()
    .min(5)
    .matches(rulesPass, { message: "Pls! create strong password" })
    .required("Pls! enter password"),
  checkMatKhau: yup
    .string()
    .oneOf([yup.ref("matKhau")], "password not matched")
    .required("Password not match"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Pls! enter email"),
  soDt: yup.number().required("Pls! enter phone number"),
  hoTen: yup
    .string()
    .matches(rulesName, { message: "please enter valid Name" })
    .required("Pls! enter fullname"),
});
