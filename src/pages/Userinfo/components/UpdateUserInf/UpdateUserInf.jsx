import React, { useEffect, useState } from "react";
import { userSvervice } from "../../../../services/user";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useFormik } from "formik";
import { validate } from "../../../../ValidateYup/ValidateYup";
import { EyeOutlined } from "@ant-design/icons";

export default function UpdateUserInf() {
  // let tKhoan = {};
  // const string = localStorage.getItem("INFO_ACCOUNT");
  // console.log(string);
  // if (string) {
  //   tKhoan = JSON.parse(string);
   
  // }
  // console.log(tKhoan);
  
  const navigate = useNavigate();
  const [stateInfoUser, setInfoUser] = useState({});
  const [pasword, setPassword] = useState("password");
  const [data, setData] = useState({});

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const result = await userSvervice.fetchUserTicket();
      setData(result.data.content);
      console.log(result.data.content);
    } catch (error) {
      notification.warning({
        message: "không thể lấy thông tin",
      });
    }
  };

  const handlePass = () => {
    if (pasword === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };
 

  const editUser = async (data) => {
    try {
      await userSvervice.fetchUserInfo(data);
      notification.success({
        message: "Chỉnh Sửa Thành Công",
        placement: "bottomRight",
        duration: 2,
      });
      navigate("/thongtincanhan");
    } catch (error) {
      console.log(error);
      notification.warning({
        message: error?.response?.data?.message || "Chỉnh Sửa Không Thành Công",
        placement: "bottomRight",
        duration: 3,
      });
    }
  };

  

  const handlChangeValue = (name) => {
    return (value) => {
      form.setFieldValue(name, value);
    };
  };

  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau,
      email: data.email,
      soDt: data.soDT,
      hoTen: data.hoTen,
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      let formData = new FormData();
      editUser(formData);
    },
  });
  return (
    <div className="register">
      <form className="form-register" onSubmit={form.handleSubmit}>
        <p className="title-register">Cập nhật thông tin </p>
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
            value={form.values.taiKhoan}
          />
          <span>Account</span>
         
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
              type={pasword}
              required
              autoComplete="on"
              value={form.values.matKhau}
              
            />
             
            <span>Password</span>
          
           
            {form.errors.matKhau && form.touched.matKhau && (
              <span className="text-danger">{form.errors.matKhau}</span>
            )}
              
          </label>
          <EyeOutlined style={{width:"50px",height:"50px"}} className=""  onClick={() => handlePass()} />
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
            value={form.values.hoTen}
          />

          <span>Full Name</span>
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
            value={form.values.email}
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
            value={form.values.soDt}
          />
          <span>Phone Number</span>
          {form.errors.soDt && form.touched.soDt && (
            <span className="text-danger">{form.errors.soDt}</span>
          )}
        </label>
        <button type="submit" className="submit-register">
          Submit
        </button>
        
      </form>
    </div>
  )
}
