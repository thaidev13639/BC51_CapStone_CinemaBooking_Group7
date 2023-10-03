import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validate } from "../../ValidateYup/ValidateYup";

export default function Register() {
  const [account, setAccount] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP03",
    hoTen: "",
  });
  //     console.log(account);
  //   const handleChange = (event) => {
  //     console.log(event);
  //     setAccount({ ...account, [event.target.name]: event.target.value });
  //   };

  //   const onSubmit = (values, action) => {
  //     console.log(values);
  //     console.log(action);
  //   };
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues: {
      account: "",
      matKhau: "",
      checkMatKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP03",
      hoTen: "",
    },
    validationSchema: validate,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  //   console.log(values);
  return (
    <div className="register">
      <form className="form-register" onSubmit={handleSubmit}>
        <p className="title-register">Register </p>
        <p className="message-register">
          Signup now and get full access to our app.{" "}
        </p>
        <label>
          <input
            value={values.account}
            onBlur={handleBlur}
            onChange={handleChange}
            name="account"
            className="input-register"
            type="text"
            required
          />
          <span>Account</span>
          {errors.account && <span>{errors.account}</span>}
        </label>
        <div className="flex-register">
          <label>
            <input
              value={values.matKhau}
              onBlur={handleBlur}
              onChange={handleChange}
              name="matKhau"
              className="input-register"
              type="password"
              required
            />
            <span>Password</span>
            {errors.matKhau && <span>{errors.matKhau}</span>}
          </label>
          <label>
            <input
              value={values.checkMatKhau}
              onBlur={handleBlur}
              onChange={handleChange}
              name="checkMatKhau"
              className="input-register"
              type="password"
              required
            />
            <span>Confirm Password</span>
            {errors.checkMatKhau && <span>{errors.checkMatKhau}</span>}
          </label>
        </div>
        <label>
          <input
            value={values.hoTen}
            onBlur={handleBlur}
            onChange={handleChange}
            name="hoTen"
            className="input-register"
            type="text"
            required
          />
          <span>Full Name</span>
          {errors.hoTen && <span>{errors.hoTen}</span>}
        </label>
        <label>
          <input
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            name="email"
            className="input-register"
            type="text"
            required
          />
          <span>Email</span>
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          <input
            value={values.soDt}
            onBlur={handleBlur}
            onChange={handleChange}
            name="soDt"
            className="input-register"
            type="number"
            required
          />
          <span>Phone Number</span>
          {errors.soDt && <span>{errors.soDt}</span>}
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
