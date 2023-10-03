import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="card-login">
      <div className="card2-login">
        <form className="form-login">
          <p id="heading-login">Login</p>
          <div className="field-login">
            <input
              name="username"
              type="text"
              className="input-field-login"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <p className="text-success ml-3">(*) Error </p>
          <div className="field-login">
            <input
              name="password"
              type="password"
              className="input-field-login"
              placeholder="Password"
            />
          </div>
          <p className="text-success ml-3">(*) Error </p>
          <div className="btn-login">
            <button className="button1-login btn-login-total">Login</button>
            <button
              className="button2-login btn-login-total"
              onClick={() => navigate("/form/register")}>
              Sign Up
            </button>
          </div>
          <button className="button3-login">Forgot Password</button>
        </form>
      </div>
    </div>
  );
}
