import React from "react";
import intro2Image from "../../assets/Illustration 2.svg";
import tick from "../../assets/Group 1120.svg";
import "./IntroSection2.css";
const IntroSection = () => {
  return (
    <div className="intro-section2">
      <div className="intro-section2__image">
        <img src={intro2Image} alt="Intro" />
      </div>
      <div className="intro-section2__content">
        <h1 className="intro-section2__content-title">
          We Provide Many Features You Can Use
        </h1>
        <h3 className="intro-section2__content-text">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </h3>
        <ul className="intro-section2__content-list">
          <li>
            <img src={tick} alt="Tick" /> Powerfull online protection.
          </li>
          <li>
            <img src={tick} alt="Tick" /> Internet without borders.
          </li>
          <li>
            <img src={tick} alt="Tick" /> Supercharged VPN
          </li>
          <li>
            <img src={tick} alt="Tick" /> No specific time limits.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
