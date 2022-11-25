import React, { useState } from "react";
import NavList from "./NavList";
import logo from "../../assets/Logo.svg";
import "./MainHeader.css";
import Button from "../UIElement/Button";
import ham from "../../assets/hamburger-menu-icon.svg";
import SubMenu from "./SubMenu";
import close from "../../assets/math-multiplication-icon.svg";
const MainHeader = ({ onClick }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const subMenuClickHandler = (event) => {
    onClick(event);
    setSubMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="submenu">
        <img
          src={subMenuOpen ? close : ham}
          alt="Ham"
          className="hamburger"
          onClick={() => {
            setSubMenuOpen(!subMenuOpen);
          }}
        />
        <div className={`submenu-content ${subMenuOpen ? "show" : "hidden"}`}>
          <SubMenu onClick={subMenuClickHandler} />
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="navigation">
        <NavList onClick={onClick} />
      </div>
      <div className="action">
        <Button text="Sign In" type="list" />
        <Button text="Sign Up" type="secondary" />
      </div>
    </header>
  );
};

export default MainHeader;
