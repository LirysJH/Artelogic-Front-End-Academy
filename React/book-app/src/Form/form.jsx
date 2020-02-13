import React from "react";
import './form.css';

const form = props => {
    return (
        <div className="form-container">
            <form onSubmit={props.input}>
                <h2>Welcome to the club, buddy!</h2>
                <div className="search-container">
                    <input
                        className="input-field"
                        type="text"
                        name="query"
                        placeholder="Type here to search a book..." 
                    />
                    <button className="search-button"><i className="fa fa-search"></i></button>
                </div>                
            </form>
        </div>
    );
};

export default form;