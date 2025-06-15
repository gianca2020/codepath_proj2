import React from "react";

const Cards = ({ title, image, description, link }) => {
    return (
        <div className="Card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">record</a>
        </div>
    )
}

export default Cards;