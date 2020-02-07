import React from "react";
import './books.css';

const booksSection = props => {
    return (
        <div className="container">
            <img src={props.image} alt={props.title} />
            <p className="container__item">{props.title}</p>
            <p className="container__item">{props.subtitle}</p>
            <p className="container__item">{props.authors}</p>
            <p className="container__item">{props.description}</p>
        </div>
    );
};

export default booksSection;