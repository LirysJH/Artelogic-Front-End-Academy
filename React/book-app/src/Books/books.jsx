import React from "react";
import './books.css';

const booksSection = props => {
    return (
        <div className="container">
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="book-link">
                <img src={props.image} alt={props.title} className="book-img" />
            </a>
            <ul className="container__items">
              <li className="container__item">{props.title}</li>
              <li className="container__item">{props.subtitle}</li>
              <li className="container__item">{props.authors}</li>
              <li className="container__item">{props.description}</li>
            </ul>
        </div>
    );
};

export default booksSection;