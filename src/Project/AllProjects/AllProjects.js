import React, {Component} from "react";
import ProjectInList from "../../components/ProjectInList/ProjectInList";
import "../../components/ProjectInList/ProjectInList.css";
import "./AllProjects.css";

class AllProjects extends Component{
    state = {

    };


    render() {
        let projects =[];
        let projectsCount= ['one', 'two', 'three'];
        for(const [index, value] of  projectsCount.entries()){
            projects.push(<ProjectInList/>)
        }
        return(
            <div className="tempDiv">

                <div className="allProjects">
                    <div>
                        <h1>Projects</h1>
                    </div>
                    <div className="projectsTopContainer">
                        <button>Create Project</button>
                        <input/>
                        <p>Insert Sort func here</p>
                    </div>

                    <div className="projectsContainer">
                        {projects}
                    </div>
                </div>



            </div>
        )
    }
}

export default AllProjects;