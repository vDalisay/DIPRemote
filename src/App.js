import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Project from "./Project/Project";
import CreateProject from "./Project/CreateProject";

class App extends React.Component{
  render() {
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
                    <Link to="/2">2</Link>
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
                    <Project
                    name={"Project Name"}
                    description={"Description"}
                    tags={"Tags"}
                    codeSnippit={"Code snippit"}
                    files={"Files"}
                    />
                  </div>
                </Route>
                <Route path="/2">
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
