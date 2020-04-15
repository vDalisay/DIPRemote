import React from 'react';
import axios from 'axios'
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
            <div>

                <label>
                    <p>Project name</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>


                <label>
                    <p>Description</p>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                </label>

                <p>Search for Tags</p>
                <button onClick={""}>Add code snippet</button>
                <button onClick={""}>Add documents</button>
                <button type="submit" onClick={() => {this.makeNewProject()}}>Create project</button>

            </div>
        )
    }


}

export default CreateProject;