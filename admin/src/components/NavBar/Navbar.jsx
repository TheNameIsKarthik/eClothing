import React from "react";
import "./navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="nav-logo" src={navlogo} alt="" />
      <img className="nav-profile" src={navProfile} alt="" />
    </div>
  );
};

export default Navbar;
