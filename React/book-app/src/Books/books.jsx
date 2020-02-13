import React from "react";
import './Books.css';

const books = props => {
    const {image, link, title, subtitle, authors, description} = props;

    return (
        <div className="container">
            <a href={link} target="_blank" rel="noopener noreferrer" className="book-link">
                <img src={image} alt={title} className="book-img" />
            </a>
            <div className="container__items">
                <ul>
                <li className="item"><h3>{title}</h3></li>
                <li className="item">{subtitle}</li>
                <li className="item">{authors}</li>
                <li className="item">{description}</li>
                </ul>
            </div>            
        </div>
    );
};

export default books;