import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "../../css/style.css";
import avatar from "../../images/img_avatar.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined } from "@ant-design/icons";
import { loginAction } from "../../store/actions/loginAction";

export default function Headers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.userReducer);

  const hanldLogout = () => {
    dispatch(loginAction(null));
    localStorage.removeItem("INFO_ACCOUNT");
    navigate("/");
  };

  const renderUser = () => {
    if (!accountState.userInfo) {
      return (
        <>
          <button
            onClick={() => navigate("/form/login")}
            className="button-header"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/form/register")}
            className="button-header"
          >
            Register
          </button>
        </>
      );
    }
    return (
      <>
        <div className="chip" onClick={() => navigate("/thongtincanhan")}>
          <img src={avatar} alt="Person" width={96} height={96} />
          {accountState?.userInfo?.hoTen}
        </div>
        <button className=" btn-logout-home">
          <LogoutOutlined onClick={hanldLogout} />
        </button>
      </>
    );
  };
  return (
    <header id="header-Navbar">
      <div className="header__content container m-auto">
        <nav className="navbar justify-content-between navbar-expand-md navbar-dark text-black">
          <NavLink id="logo-Navbar" className="navbar-brand" to="/">
            <span>Cinema</span>{" "}
            <FontAwesomeIcon className="icon" icon={faClapperboard} />
          </NavLink>

          <div className="navbar">
            <div className="search"></div>
            {renderUser()}
            <div className="dropdown">
              <button
                id="dropDown-Navbar"
                className="btn btn-default  dropdown-toggle  no-caret"
                type="button"
                data-toggle="dropdown"
              >
                <FontAwesomeIcon icon={faBars} /> <span className="caret" />
              </button>
              <ul className="dropdown-menu text-center">
                <li className=" dropdown-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className=" dropdown-item ">
                  <NavLink to="/form/register">Register</NavLink>
                </li>
                <li className=" dropdown-item ">
                  <NavLink to="/admin">Admin Page</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
