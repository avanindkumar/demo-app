import React from "react";
import "./FooterLinks.css";

const FooterLinks = ({ title, list }) => {
  return (
    <ul className="footer-links">
      <li className="footer-links-title">{title}</li>
      {list.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
};

export default FooterLinks;
