import React from "react";
import "./MenuBar.css";
import logo from "../assets/logo.png";

const MenuBar = () => (
  <div className="menu-bar">
    <img src={logo} alt="Polypo" className="logo" />
    <div className="menu-items">
      <span className="menu-men">MEN</span>
      <span className="menu-divider">|</span>
      <span className="menu-women">WOMEN</span>
    </div>
  </div>
);

export default MenuBar;
