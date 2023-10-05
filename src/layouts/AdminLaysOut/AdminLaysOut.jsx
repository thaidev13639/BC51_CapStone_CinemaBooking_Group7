import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../css/style.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, notification, theme } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
const { Header, Content, Footer, Sider } = Layout;

export default function AdminLaysOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
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
    getItem("User", "/admin/user", <DesktopOutlined />),
    getItem("Firm", "/admin", <UserOutlined />, [
      getItem("Detail Firm", "/admin/detail-firm"),
      getItem("ShowTime Firm", "/admin/showtime"),
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
        <div className="logo-admin">LOGO</div>
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
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}>
          {/* <HeaderAdmin /> */}
          <div className="header-admin">
            {/* <div>Header</div> */}
            <div className="user-logo">User</div>
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
              marginTop: "5%",
            }}>
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
