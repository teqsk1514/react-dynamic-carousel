import React from 'react';

const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.click} >
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}

export default LeftArrow;