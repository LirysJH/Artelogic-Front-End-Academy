import React from "react";
import './bookSearch.css';

const searchForm = props => {
    return (
        <div className="search-container">
            <h2>Welcome to the club, buddy!</h2>
            <input className="input-field" type="text" placeholder="Type here to search a book..." />
            <button className="search-button"><i className="fa fa-search"></i></button>
        </div>
    );
};

export default searchForm;