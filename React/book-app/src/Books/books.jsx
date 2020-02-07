import React from "react";
import './books.css';

const booksSection = props => {
    return (
        <div className="container">
            <p className="container__item">Title: {props.title}</p>
            <p className="container__item">Subtitle: {props.subtitle}</p>
            <p className="container__item">Authors: {props.authors}</p>
            <p className="container__item">Description: {props.description}</p>
        </div>
    );
};

export default booksSection;