import React from 'react';
import axios from 'axios';
import './CreateProject.css';

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

                   <div className='content'>
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