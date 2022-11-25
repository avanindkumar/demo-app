import React from "react";
import "./Card.css";
import boxImage from "../../assets/Free.svg";
import Button from "../UIElement/Button";

const Card = ({ name, features, price }) => {
  return (
    <div className="card">
      <div>
        <img src={boxImage} alt="Box" className="card-image" />
        <h4 className="card-title">{name} Plan</h4>
        <ul className="card-feature-list">
          {features.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="card-action">
        <h2 className="card-price">
          {price}
          <span className="card-price-month">
            {price === "Free" ? "" : " / mo"}
          </span>
        </h2>

        <Button text="Select" type="secondary" />
      </div>
    </div>
  );
};

export default Card;
