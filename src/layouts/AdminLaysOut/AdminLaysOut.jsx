import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../images/img_avatar.png";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, notification, theme } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
const { Header, Content, Footer, Sider } = Layout;

export default function AdminLaysOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const accountState = useSelector((state) => state.userReducer);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem("Home", "/", <PieChartOutlined />),
    getItem("User", "/admin/user", <UserOutlined />),
    getItem("Firm", "", <DesktopOutlined />, [
      getItem("Detail Film", "/admin"),
      getItem("Add Film", "/admin/add-film"),
    ]),
    getItem("Logout", "logout", <FileOutlined />),
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div className="logo-admin p-3">
          <span>Cinema</span>{" "}
          <FontAwesomeIcon className="icon" icon={faClapperboard} />
        </div>
        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
              const result = window.confirm("Bạn Muốn Đăng Xuất??");
              if (result) {
                dispatch(loginAction(null));
                localStorage.removeItem("INFO_ACCOUNT");
                notification.success({
                  message: "Đăng Xuất Thành Công",
                  placement: "topLeft",
                  duration: 2,
                });
                navigate("/");
              }
            } else {
              navigate(key);
            }
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ backgroundColor: "#cbf6e1" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}>
          <div className="header-admin container">
            <div className="user-logo">
              <div className="chip" style={{ cursor: "pointer" }} onClick={() => navigate(`/admin/user-detail/${accountState?.userInfo?.taiKhoan}`)}>
                <img src={avatar} alt="Person" width={96} height={96} />
                {accountState?.userInfo?.hoTen}
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "6% 16px",
          }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              marginTop: "1%",
              backgroundColor: "#cbf6e1"
            }}>
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#cbf6e1"
          }}>
          Movie ©2023 Created by Hoang Anh and Thai
        </Footer>
      </Layout>
    </Layout>
  );
}
