import React from 'react';
import {Dropdown} from 'react-bootstrap';

const CreateProject = (props) =>{
    return(
        <div>

            <p>Project name</p>
            <textarea></textarea>

            <p>Description</p>
            <textarea></textarea>

            <p>Search for Tags</p>
            <textarea></textarea>
            <button onClick={""}>Add code snippet</button>
            <button onClick={""}>Add documents</button>
            <button onClick={""}>Create project</button>

        </div>
    )
}

export default CreateProject;