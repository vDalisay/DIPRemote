import React from 'react';
import axios from 'axios'
import {Dropdown} from 'react-bootstrap';

class CreateProject extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:null,
            description:null,
            status:null,
            files:["test"],
        }
    }

    makeNewProject = () =>{
        console.log(this.state.name,this.state.description, this.state.files[0]);
        axios.post('http://localhost:8081/project/',{
            name: this.state.name,
            description: this.state.description,
            status:"1",
            filename:this.state.files[0].name,
            filebase64:this.state.files[0].base64,
            filetype:this.state.files[0].type,
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

    getFiles(files){
        this.setState({files:files});
        console.log(this.state.files);
    }

    handleFile(e) {
        let files = e.target.files;
        // Process each file
        var allFiles = [];
        for (let i = 0; i < files.length; i++) {

            let file = files[i];

            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {

                // Make a fileInfo Object
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result,
                    file: file,
                };

                // Push it to the state
                allFiles.push(fileInfo);
                //console.log(allFiles);
                this.getFiles(allFiles);


            }
        }
    }


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
                <label>
                    <p>Add documents</p>
                    <input type="file" name="file" onChange={this.handleFile.bind(this)}/>

                </label>
                <button type="submit" onClick={() => {this.makeNewProject()}}>Create project</button>
            </div>
        )
    }


}

export default CreateProject;