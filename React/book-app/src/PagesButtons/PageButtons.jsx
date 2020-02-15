import React from "react";
import './PageButtons.css';

const buttons = props => {
    const {pages} = props;
    const items = [];
    
    if(pages)
    {
        for(let page=1; page<= pages; page++)
        {
            items.push(<button className="page" key={page}>{page}</button>);
        }
    }

    return (
        <div className="button-container">
            {items}
        </div>
    );
};

export default buttons;