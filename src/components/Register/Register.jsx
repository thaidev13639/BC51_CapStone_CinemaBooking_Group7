import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../../ValidateYup/ValidateYup";
import { userSvervice } from "../../services/user";
import { notification } from "antd";
import "../../sass/_register.scss";

export default function Register() {
  const navigate = useNavigate();
  const form = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      confirmPassWord: "",
      email: "",
      soDt: "",
      hoTen: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        const data = { ...values, maNhom: "GP03" };
        delete data.confirmPassWord;
        await userSvervice.fetchRegisterApi(data);
        notification.success({
          message: "Đăng ký thành công",
        });
        navigate("/form/login");
      } catch (error) {
        notification.error({
          message: error?.response?.data?.content || "Đăng ký không thành công",
        });
      }
    },
  });

  return (
    <div className="register">
      <form className="form-register" onSubmit={form.handleSubmit}>
        <p className="title-register">Đăng Ký</p>
        <p className="message-register">
          Đăng ký ngay và sử dụng dịch vụ.{" "}
        </p>
        <label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            name="taiKhoan"
            className={`input-register ${
              form.errors.taiKhoan && form.touched.taiKhoan ? "input-erorr" : ""
            }`}
            type="text"
            required
          />
          <span>Tài Khoản</span>
          {form.errors.taiKhoan && form.touched.taiKhoan && (
            <span className="text-danger">{form.errors.taiKhoan}</span>
          )}
        </label>
        <div className="flex-register">
          <label>
            <input
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              name="matKhau"
              className={`input-register ${
                form.errors.matKhau && form.touched.matKhau ? "input-erorr" : ""
              }`}
              type="password"
              required
              autoComplete="on"
            />
            <span>Mật Khẩu</span>
            {form.errors.matKhau && form.touched.matKhau && (
              <span className="text-danger">{form.errors.matKhau}</span>
            )}
          </label>
          <label>
            <input
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              name="confirmPassWord"
              className={`input-register ${
                form.errors.confirmPassWord && form.touched.confirmPassWord
                  ? "input-erorr"
                  : ""
              }`}
              type="password"
              required
              autoComplete="on"
            />
            <span>Xác Nhận Mật Khẩu</span>
            {form.errors.confirmPassWord && form.touched.confirmPassWord && (
              <span className="text-danger">{form.errors.confirmPassWord}</span>
            )}
          </label>
        </div>
        <label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            name="hoTen"
            className={`input-register ${
              form.errors.hoTen && form.touched.hoTen ? "input-erorr" : ""
            }`}
            type="text"
            required
          />
          <span>Họ Và Tên</span>
          {form.errors.hoTen && form.touched.hoTen && (
            <span className="text-danger">{form.errors.hoTen}</span>
          )}
        </label>
        <label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            name="email"
            className={`input-register ${
              form.errors.email && form.touched.email ? "input-erorr" : ""
            }`}
            type="text"
            required
          />
          <span>Email</span>
          {form.errors.email && form.touched.email && (
            <span className="text-danger">{form.errors.email}</span>
          )}
        </label>
        <label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            name="soDt"
            className={`input-register ${
              form.errors.soDt && form.touched.soDt ? "input-erorr" : ""
            }`}
            type="number"
            required
          />
          <span>Số Điện Thoại</span>
          {form.errors.soDt && form.touched.soDt && (
            <span className="text-danger">{form.errors.soDt}</span>
          )}
        </label>
        <button type="submit" className="submit-register">
          Đăng Ký
        </button>
        <p className="signin-register">
          Đâ có tài khoản ? <Link to="/form/login">Đăng Nhập</Link>{" "}
        </p>
      </form>
    </div>
  );
}
