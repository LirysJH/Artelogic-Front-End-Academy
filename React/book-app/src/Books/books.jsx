import React from "react";
import './Books.css';

const books = props => {
    const {image, link, title, subtitle, authors, description} = props;

    return (
        <div className="container">
            <div className="container__imgBox">
                <img src={image} alt={title} className="book-img" />
                <a href={link} target="_blank" rel="noopener noreferrer" className="book-link">
                    <div class="to-link-button">
                        More
                    </div>
                </a>                
            </div>            
            <div className="container__items">
                <ul>
                <li className="item"><b>{title}</b></li>
                <li className="item"><u>{subtitle}</u></li>
                <li className="item"><i>{authors}</i></li>
                <li className="item">{description}</li>
                </ul>
            </div>            
        </div>
    );
};

export default books;