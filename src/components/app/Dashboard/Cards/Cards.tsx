import React from "react";
import "./Cards.scss";
import { ICard } from "./types";

function Card(props: ICard) {
  const { title, description, time, image } = props;
  return (
    <div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            {title}
            <img className="front-img" src="tesoro.jpg" alt="img-card" />
          </div>
          <div className="card-back">
            <div className="design-container">
              <p>{description}</p>
              <p>{time}</p>
              <p>{image}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
