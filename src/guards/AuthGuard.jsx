import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthGuard(props) {
  const navigate = useNavigate();
  const stateUser = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!stateUser.userInfo) {
      navigate("/form/login");
      notification.warning({
        message: "Vui Lòng Đăng Nhập",
        placement: "topLeft",
        duration: 2.5,
      });
    }
  }, []);
  return <>{props.children}</>;
}
