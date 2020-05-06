import React from 'react';
import axios from 'axios';
import './CreateProject.css';

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
                <div className="content">
                    <p>Project Name</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div className="content">
                    <p>Description</p>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                    <button className="inputBtn">Import GIT Readme</button>
                </div>

                <div className="content">
                    <p>Upload Files</p>
                    <input type="file"/>
                </div>

                <div className="content">
                    <p>Tags</p>
                    <input type="text"/>
                    <button className="inputBtn">Generate text from description</button>
                </div>

                </div>

                <div className="column">
                    <div className="content">
                        <p>Team Members</p>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        {/*hier moet nog func om members te laten zien na selecteren*/}
                    </div>

                   <div className="content">
                       <p>Project Status</p>
                       <div className="select">
                           <select>
                               <option selected disabled>STATUS:</option>
                               <option value="1">ONGOING</option>
                               <option value="2">DONE</option>
                               <option value="3">YET TO START</option>
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