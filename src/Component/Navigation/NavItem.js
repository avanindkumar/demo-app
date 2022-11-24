import React from "react";
import Button from "../UIElement/Button";
import "./NavItem.css";
const NavItem = ({ text }) => {
  return (
    <li>
      <Button type="list" text={text} />{" "}
    </li>
  );
};

export default NavItem;
