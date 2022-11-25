import React from "react";
import "./NavItem.css";
const NavItem = ({ text, onClick }) => {
  return <li onClick={onClick}>{text}</li>;
};

export default NavItem;
