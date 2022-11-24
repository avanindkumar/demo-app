import React from "react";
import "./CountSection.css";
import userIcon from "../../assets/Group 1216.svg";
import locationIcon from "../../assets/Group 1215.svg";
import serverIcon from "../../assets/Group 1217.svg";
const CountSection = () => {
  return (
    <div className="count-section">
      <div className="count-section___item">
        <img src={userIcon} alt="Users" />
        <div className="count-section___item-content">
          <h3>90+</h3>
          <p>Users</p>
        </div>
      </div>
      <div className="count-section___item">
        <img src={locationIcon} alt="Locations" />
        <div className="count-section___item-content">
          <h3>30+</h3>
          <p>Locations</p>
        </div>
      </div>
      <div className="count-section___item">
        <img src={serverIcon} alt="Servers" />
        <div className="count-section___item-content">
          <h3>50+</h3>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
};

export default CountSection;
