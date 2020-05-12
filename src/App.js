import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Project from "./Project/Project";
import CreateProject from "./Project/CreateProject";
import ProjectDetails from "./Project/ProjectDetails";
import Navbar from "./components/Navbar/Navbar";
import {Router} from "react-router";
import AllProjects from "./Project/AllProjects/AllProjects";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [{item:""}],

    };
    this.getAllProjects = this.getAllProjects.bind(this);
  }

  componentDidMount() {
    this.getAllProjects();
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


  render() {
    let projects = null;
    projects = (
        <div>
          {this.state.projects.map((projects,index) =>{
            return <Project projects={projects} />
          })}
        </div>
    );
    return (
        <div className="App">
            <div className="bg">


            <Navbar/>
          <div style={{marginTop: '64px'}}> </div> {/*Even lelijk de content omlaag gepusht. bij merge veranderen*/}

            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Router exact path="/1">
                  <div>
                    {projects}
                  </div>
                </Router>
                <Route exact path="/CreateProject" component={CreateProject}/>
                <Route exact path="/AllProjects" component={AllProjects}/>
                <Route exact path="/ProjectDetails" component={ProjectDetails}>
                </Route>
              </Switch>
            </div>
            </div>
        </div>
    )
  }
}

export default App;
