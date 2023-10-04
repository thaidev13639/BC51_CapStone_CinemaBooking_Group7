import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../../ValidateYup/ValidateYup";
import { userSvervice } from "../../services/user";
import { notification } from "antd";

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
        <p className="title-register">Register </p>
        <p className="message-register">
          Signup now and get full access to our app.{" "}
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
          <span>Account</span>
          {form.errors.taiKhoan && form.touched.taiKhoan && (
            <span>{form.errors.taiKhoan}</span>
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
            />
            <span>Password</span>
            {form.errors.matKhau && form.touched.matKhau && (
              <span>{form.errors.matKhau}</span>
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
            />
            <span>Confirm Password</span>
            {form.errors.confirmPassWord && form.touched.confirmPassWord && (
              <span>{form.errors.confirmPassWord}</span>
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
          <span>Full Name</span>
          {form.errors.hoTen && form.touched.Name && (
            <span>{form.errors.hoTen}</span>
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
            <span>{form.errors.email}</span>
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
          <span>Phone Number</span>
          {form.errors.soDt && form.touched.soDt && (
            <span>{form.errors.soDt}</span>
          )}
        </label>
        <button type="submit" className="submit-register">
          Submit
        </button>
        <p className="signin-register">
          Already have an acount ? <Link to="/form/login">Login</Link>{" "}
        </p>
      </form>
    </div>
  );
}
