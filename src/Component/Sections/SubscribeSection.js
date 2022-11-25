import React from "react";
import Button from "../UIElement/Button";

import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-text">
        <h1>Subscribe Now for Get Special Features!</h1>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <div className="subscribe-action">
        <Button text="Subscribe Now" type="primary-big" />
      </div>
    </div>
  );
};

export default SubscribeSection;
