import React from "react";
import NavItem from "./NavItem";
import "./SubMenu.css";
const SubMenu = ({ onClick }) => {
  return (
    <div className={`sub-menu`}>
      <ul className="sub-menu-nav-list">
        <NavItem text="About" onClick={onClick} />
        <NavItem text="Features" onClick={onClick} />
        <NavItem text="Pricing" onClick={onClick} />
        <NavItem text="Testimonial" onClick={onClick} />
        <NavItem text="Help" onClick={onClick} />
      </ul>
    </div>
  );
};

export default SubMenu;
