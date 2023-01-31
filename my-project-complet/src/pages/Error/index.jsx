import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.PNG";

const Error = () => {
  return (
    <div className="body">
    <div className="App-nav-vertical">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to</p>
      <p className="nameOfCompany">WEALTH HEALTH</p>
      </div>

    <div className="error_container">
      <h1 className="error_container__title">Error 404</h1>
      <p className="error_container__title__para">Page Not Found</p>
      <div className="link_bloc error_container__link">
        <Link to="/" ari-label="Back to home">
          Back to home
        </Link>
      </div>
    </div>
    </div>

  );
};

export default Error;