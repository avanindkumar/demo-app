import React from "react";
import NavItem from "./NavItem";
import "./NavList.css";

const NavList = ({ onClick }) => {
  return (
    <ul className="nav-list">
      <NavItem text="About" onClick={onClick} />
      <NavItem text="Features" onClick={onClick} />
      <NavItem text="Pricing" onClick={onClick} />
      <NavItem text="Testimonial" onClick={onClick} />
      <NavItem text="Help" onClick={onClick} />
    </ul>
  );
};

export default NavList;
