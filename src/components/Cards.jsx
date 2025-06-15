import React from "react";
import "./cards.css"; // Make sure to import your CSS

const Cards = ({ title, image, description, link, flipped, onFlip }) => (
  <div className={`Card-outer${flipped ? " flipped" : ""}`} onClick={onFlip}>
    <div className="Card-inner">
      <div className="Card Card-front">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="Card Card-back">
        <a href={link} target="_blank" rel="noopener noreferrer">record</a>
      </div>
    </div>
  </div>
);

export default Cards;