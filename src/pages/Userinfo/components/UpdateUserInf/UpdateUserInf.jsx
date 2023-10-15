import React, { useContext, useEffect, useState } from "react";
import { userSvervice } from "../../../../services/user";
import { useNavigate } from "react-router-dom";
import {  notification } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { EyeOutlined } from "@ant-design/icons";
import { validateInfo } from "../../../../ValidateYup/ValidateYup";
import { loginAction } from "../../../../store/actions/loginAction";
import { LoadingContext } from "../../../../contexts/LoadingContext/LoadingContext";

export default function UpdateUserInf() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [pasword, setPassword] = useState("password");
  const [data, setData] = useState({});
  const [loadingState,setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      setLoadingState({ isLoading : true});
      const result = await userSvervice.fetchUserTicket();
      setData(result.data.content);
     
      setLoadingState({ isLoading : false});
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

  const hanldLogout = () => {
    dispatch(loginAction(null));
    localStorage.removeItem("INFO_ACCOUNT");
    navigate("/");
  };

  const editUser = async (data) => {
    try {
      await userSvervice.fetchUserInfo(data);
      notification.success({
        message: "Chỉnh Sửa Thành Công ,Đăng nhập lại",
        placement: "bottomRight",
        duration: 4,
      });

      hanldLogout();
      // navigate("/thongtincanhan");
    } catch (error) {
      console.log(error);
      notification.warning({
        message: error?.response?.data?.message || "Chỉnh Sửa Không Thành Công",
        placement: "bottomRight",
        duration: 3,
      });
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: data?.taiKhoan,
      matKhau: data?.matKhau,
      email: data?.email,
      soDt: data?.soDT,
      maNhom: "GP00",
      maLoaiNguoiDung: "khachHang",
      hoTen: data?.hoTen,
    },
    validationSchema: validateInfo,
    onSubmit: (values) => {
      console.log(values);

      //  let formData = new FormData();

      editUser(values);
    },
  });

  return (
    <div className="updateForm">
      <form className="form-register" onSubmitCapture={formik.handleSubmit}>
        <p className="title-register">Cập nhật thông tin </p>
        <p className="message-register">
          Signup now and get full access to our app.{" "}
        </p>
        <label>
          <input
          
            name="taiKhoan"
            disabled={true}
            className="input-register "
            type="text"
            required
            value={formik.values.taiKhoan}
          />
          <span>Account</span>

          {/* {formik.errors.taiKhoan && formik.touched.taiKhoan && (
            <span className="text-danger">{formik.errors.taiKhoan}</span>
          )} */}
        </label>
        <div className="flex-register">
          <label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="matKhau"
              className={`input-register ${
                formik.errors.matKhau && formik.touched.matKhau
                  ? "input-erorr"
                  : ""
              }`}
              type={pasword}
              required
              autoComplete="on"
              value={formik.values.matKhau}
            />

            <span>Password</span>

            {formik.errors.matKhau && formik.touched.matKhau && (
              <span className="text-danger">{formik.errors.matKhau}</span>
            )}
          </label>
          <EyeOutlined
            style={{ width: "50px", height: "50px" }}
            className=""
            onClick={() => handlePass()}
          />
        </div>
        <label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="hoTen"
            className={`input-register ${
              formik.errors.hoTen && formik.touched.hoTen ? "input-erorr" : ""
            }`}
            type="text"
            required
            value={formik.values.hoTen}
          />

          <span>Full Name</span>
          {formik.errors.hoTen && formik.touched.hoTen && (
            <span className="text-danger">{formik.errors.hoTen}</span>
          )}
        </label>
        <label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="email"
            className={`input-register ${
              formik.errors.email && formik.touched.email ? "input-erorr" : ""
            }`}
            type="text"
            required
            value={formik.values.email}
          />
          <span>Email</span>
          {formik.errors.email && formik.touched.email && (
            <span className="text-danger">{formik.errors.email}</span>
          )}
        </label>
        <label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="soDt"
            className={`input-register ${
              formik.errors.soDt && formik.touched.soDt ? "input-erorr" : ""
            }`}
            type="number"
            required
            value={formik.values.soDt}
          />
          <span>Phone Number</span>
          {formik.errors.soDt && formik.touched.soDt && (
            <span className="text-danger">{formik.errors.soDt}</span>
          )}
        </label>

        <button className="btn btn-success" type="submit">
          Sửa Thông Tin
        </button>
      </form>
    </div>
  );
}
