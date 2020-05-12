import React from 'react';
import './App.css';
import axios from 'axios'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Project from "./Project/Project";
import CreateProject from "./Project/CreateProject";
import Files from "./Project/File";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [{item:""}],
      files:[{item:""}],

    };
    this.getAllProjects = this.getAllProjects.bind(this);
  }

  componentDidMount() {
    this.getAllProjects();
    this.getAllFiles();
  }

  getAllProjects(){
    const self = this;
    axios.get('http://localhost:8081/project/all'
    )
        .then(function (response) {
          console.log(response.data);
          const projects = [...self.state.projects];
          for(let i = 0; i < response.data.length; i++) {
            console.log(response.data[i]);
            projects[i] = response.data[i];
          }
          self.setState({
            projects: projects,
          });
          return "succes"
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  getAllFiles(){
    const self = this;
    axios.get('http://localhost:8081/project/allFile'
    )
        .then(function (response) {
          console.log(response.data);
          const files = [...self.state.files];
          for(let i = 0; i < response.data.length; i++) {
            console.log(response.data[i]);
            files[i] = response.data[i];
          }
          self.setState({
            files: files,
          });
          return "succes"
        })
        .catch(function (error) {
          console.log(error);
        });
  };


  render() {
    let projects = null;
    projects = (
        <div>
          {this.state.projects.map((projects,index) =>{
            return <Project projects={projects} />
          })}
        </div>
    );

    let files = null;
    files = (
        <div>
          {this.state.files.map((files,index) =>{
            return <Files files={files} />
          })}
        </div>
    );
    return (
        <div className="App">
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/1">1</Link>
                  </li>
                  <li>
                    <Link to="/CreateProject">Create Project</Link>
                  </li>
                  <li>
                    <Link to="/3">3</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/1">
                  <div>
                    {projects}
                    {files}
                  </div>
                </Route>
                <Route path="/CreateProject">
                  <CreateProject/>
                </Route>
                <Route path="/3">

                </Route>
                <Route path="/">
                  <div className="App">
                    <header className="App-header">

                    </header>
                  </div>

                </Route>
              </Switch>
            </div>
          </Router>
        </div>
    )
  }
}

export default App;
