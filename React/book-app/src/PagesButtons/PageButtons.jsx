import React from "react";
import './PageButtons.css';

const buttons = props => {
    const {pages} = props;
    let items = [];
    
    if(pages)
    {
        for(let page=1; page<= pages; page++)
        {
            items.push(<button
                            className="page"
                            value={page}
                            key={page}
                            onClick={props.onClick}
                            >
                                {page}
                        </button>);
        }
    }

    return (
        <div className="button-container">
            {items}
        </div>
    );
};

export default buttons;