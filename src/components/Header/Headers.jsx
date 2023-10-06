import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "../../css/style.css";
import avatar from "../../images/img_avatar.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined } from "@ant-design/icons";
import { loginAction } from "../../store/actions/loginAction";

export default function Headers() {
 
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.userReducer);
  
  const hanldLogout = () => {
    dispatch(loginAction(null));
    localStorage.removeItem("INFO_ACCOUNT");
    navigate("/");
  };

 const handleChange =(event) => {
    console.log(event.target.value);
    setSearch({
      keyword:event.target.value,
    })
  }

  const renderUser = () => {
    if (!accountState.userInfo) {
      return (
        <>
          <button
            onClick={() => navigate("/form/login")}
            className="button-header">
            Login
          </button>
        </>
      );
    }
    return (
      <>
        <div className="chip">
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
    <header id="header">
      <div className="header__content container m-auto">
        <nav className="navbar justify-content-between navbar-expand-md navbar-dark text-black">
          <NavLink id="logo" className="navbar-brand" to="/">
            <span>Cinema</span>{" "}
            <FontAwesomeIcon className="icon" icon={faClapperboard} />
          </NavLink>

          <div className="navbar">
            <div className="search">
              <form action="#" method="GET" className="search-right">
                <input type="search" 
                placeholder="Search" />
              </form>
            </div>
            {renderUser()}
            <div className="dropdown">
              <button
                id="dropDown"
                className="btn btn-default  dropdown-toggle  no-caret"
                type="button"
                data-toggle="dropdown">
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
