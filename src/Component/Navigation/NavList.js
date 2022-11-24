import React from "react";
import NavItem from "./NavItem";
import "./NavList.css";

const NavList = () => {
  return (
    <ul className="nav-list">
      <NavItem text="About" />
      <NavItem text="Features" />
      <NavItem text="Pricing" />
      <NavItem text="Testimonial" />
      <NavItem text="Help" />
    </ul>
  );
};

export default NavList;
