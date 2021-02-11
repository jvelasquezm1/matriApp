import React from "react";
import "./Cards.scss";
import { ICard } from "./types";

function Card(props: ICard) {
  const { title, description, time, image, iframe } = props;
  return (
    <div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <img className="front-img" src={image} alt="img-card" />
            <h4>{title}</h4>
          </div>
          <div className="card-back">
            <div className="design-container">
              <p className="description">{description}</p>
              <p>{time}</p>
              {iframe}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
