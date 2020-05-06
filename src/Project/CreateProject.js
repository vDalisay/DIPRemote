import React from 'react';
import axios from 'axios';
import './CreateProject.css';

import {Dropdown} from 'react-bootstrap';

class CreateProject extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:null,
            description:null,
            status:null
        }
    }

    makeNewProject = () =>{
        console.log(this.state.name,this.state.description);
        axios.post('http://localhost:8081/project/',{
            name: this.state.name,
            description: this.state.description,
            status:this.state.status,
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
                    <p>Project Name</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div>
                    <p>Description</p>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                    <button className="inputBtn">Import GIT Readme</button>
                </div>

                <div>
                    <p>Upload Files</p>
                    <input type="file"/>
                </div>

                <div>
                    <p>Tags</p>
                    <input type="text"/>
                    <button className="inputBtn">Generate text from description</button>
                </div>

                </div>

                <div className="column">
                    <div>
                        <p>Team Members</p>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        {/*hier moet nog func om members te laten zien na selecteren*/}
                    </div>

                   <div>
                       <p>Project Status</p>
                       <div className="select">
                           <select name="status" onChange={this.handleChange}>
                               <option selected disabled>STATUS:</option>
                               <option value="ONGOING">ONGOING</option>
                               <option value="DONE">DONE</option>
                               <option value="YET TO START">YET TO START</option>
                           </select>
                       </div>
                   </div>

                </div>


                <button className="saveBtn" type="submit" onClick={() => {this.makeNewProject()}}>Save</button>
            </div>
        )
    }


}

export default CreateProject;