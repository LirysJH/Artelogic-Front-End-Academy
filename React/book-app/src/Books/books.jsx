import React from "react";
import './Books.css';

const books = props => {
    const {image, link, title, subtitle, authors, description} = props;

    return (
        <div className="container">
            <a href={link} target="_blank" rel="noopener noreferrer" className="book-link">
                <img src={image} alt={title} className="book-img" />
            </a>
            <ul className="container__items">
              <li className="container__item">{title}</li>
              <li className="container__item">{subtitle}</li>
              <li className="container__item">{authors}</li>
              <li className="container__item">{description}</li>
            </ul>
        </div>
    );
};

export default books;