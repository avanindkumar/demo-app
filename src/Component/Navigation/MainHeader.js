import React from "react";
import NavList from "./NavList";
import logo from "../../assets/Logo.svg";
import "./MainHeader.css";
import Button from "../UIElement/Button";

const MainHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="navigation">
        <NavList />
      </div>
      <div className="action">
        <Button text="Sign In" type="list" />
        <Button text="Sign Up" type="secondary" />
      </div>
    </header>
  );
};

export default MainHeader;
