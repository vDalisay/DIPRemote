import React from 'react';

const Project = props =>{

    return(
        <div>
            {console.log(props)}
            <p>{props.projects.name}</p>
            <p>{props.projects.description}</p>\
        </div>
    );





};

export default Project;