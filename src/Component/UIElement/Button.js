import React from "react";
import "./Button.css";

const Button = ({ text, onClick, type }) => {
  let btnStyle;
  if (type === "primary-big") {
    btnStyle = "button primary-big";
  }
  if (type === "secondary") {
    btnStyle = "button outline";
  }
  if (type === "list") {
    btnStyle = "button list";
  }
  return (
    <button className={btnStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
