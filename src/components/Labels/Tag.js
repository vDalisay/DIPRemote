import React from 'react';
import './LabelStyles.css';

const Tag = (props) => {
    return (
        <span className="label tag">
           {props.tagname}
        </span>
    );
};

export default Tag;