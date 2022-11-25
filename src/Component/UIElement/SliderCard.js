import React from "react";
import starImage from "../../assets/star.svg";

import "./SliderCard.css";
const SliderCard = ({ avatar, name, location, rating, text }) => {
  return (
    <div className="slider-card">
      <div className="slider-card-title">
        <img src={avatar} alt="Avatar" />

        <div className="slider-card-avatar-name">
          <h4>{name}</h4>
          <p>{location}</p>
        </div>

        <p>
          {rating}
          <img src={starImage} alt="star" className="slider-star" />
        </p>
      </div>

      <div className="slider-card-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SliderCard;
