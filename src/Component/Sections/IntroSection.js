import React from "react";
import introImage from "../../assets/Illustration 1.svg";
import Button from "../UIElement/Button";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="intro-section__content">
        <h1 className="intro-section__content-title">
          Want anything to be easy with LaslesVPN.
        </h1>
        <h3 className="intro-section__content-text">
          Provide a network for all your needs with ease and fun using
          <strong> LaslesVPN </strong>
          discover interesting features from us.
        </h3>
        <Button type="primary-big" text="Get Started" />
      </div>
      <div className="intro-section__image">
        <img src={introImage} alt="Intro" />
      </div>
    </div>
  );
};

export default IntroSection;
