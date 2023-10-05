import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NoAuthGuard(props) {
  const navigate = useNavigate();
  const stateUser = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (stateUser.userInfo) {
      navigate("/");
      notification.warning({
        message: "Đăng Xuất Trước Khi Thao Tác",
        duration: 2,
        placement: "topLeft",
      });
    }
  }, []);
  return <>{props.children}</>;
}
