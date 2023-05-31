import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-bar">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="#"> New</Link>
              </li>
              <li>
                <Link to="#"> Popular</Link>
              </li>
              <li>
                <Link to="#"> Trendig</Link>
              </li>
              <li>
                <Link to="#">Categories </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
