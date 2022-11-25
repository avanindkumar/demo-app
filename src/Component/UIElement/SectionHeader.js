import React from "react";

import "./SectionHeader.css";
const SectionHeader = ({ title, text }) => {
  return (
    <div className="section-heading">
      <h2 className="section-heading-title">{title}</h2>
      <p className="section-heading-text">{text}</p>
    </div>
  );
};

export default SectionHeader;
