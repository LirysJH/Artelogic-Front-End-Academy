import React from "react";
import './Form.css';

const form = props => {
    return (
        <div className="form-container">
            <form onSubmit={props.input}>
                <h2>Welcome to the club, buddy!</h2>
                <input
                    className="input-field"
                    type="text"
                    name="query"
                    placeholder="Type here to search a book..." 
                />
                <button className="search-button"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
};

export default form;