import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "../../css/style.css";
// import "../../sticky.js";
import avatar from "../../images/img_avatar.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
                <input type="search" placeholder="Search" />
              </form>
            </div>

            <div className="chip">
              <img src={avatar} alt="Person" width={96} height={96} />
              John Doe
            </div>

            <div className="dropdown">
              <button
                id="dropDown"
                className="btn btn-default  dropdown-toggle  no-caret"
                type="button"
                data-toggle="dropdown">
                <FontAwesomeIcon icon={faBars} /> <span className="caret" />
              </button>
              <ul className="dropdown-menu text-center">
                <li>
                  <NavLink to="/form/login" className="active">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/form/register">Register</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
