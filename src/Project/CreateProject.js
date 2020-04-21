import React from 'react';
import axios from 'axios';
import './CreateProject.css';

import {Dropdown} from 'react-bootstrap';

class CreateProject extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:null,
            description:null
        }
    }

    makeNewProject = () =>{
        console.log(this.state.name,this.state.description);
        axios.post('http://localhost:8081/project/',{
            name: this.state.name,
            description: this.state.description
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error.response);
            });
    };

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };


    render() {
        return(
            <div className="row">
                <div className="column">
                <div>
                    <p>Project name</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div>
                    <p>Description</p>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                    <button className="inputBtn">Import GIT Readme</button>
                </div>

                <div>
                    <p>Upload files</p>
                    <input type="file"/>
                </div>

                <div>
                    <p>Tags</p>
                    <input type="text"/>
                    <button className="inputBtn">Generate text from description</button>
                </div>

                </div>

                <div className="column">
                    <label>2nd column</label>
                    <button className="saveBtn" type="submit" onClick={() => {this.makeNewProject()}}>Save</button>
                </div>
            </div>
        )
    }


}

export default CreateProject;