import React, {Component} from "react";
import ProjectInList from "../../components/ProjectInList/ProjectInList";
import "../../components/ProjectInList/ProjectInList.css";
import "./AllProjects.css";
import {MdSearch} from "react-icons/md";

class AllProjects extends Component{
    state = {

    };


    render() {
        let projects =[];
        let projectsCount= ['one', 'two', 'three', 'four', '5', '6', '7'];
        for(const [index, value] of  projectsCount.entries()){
            projects.push(<ProjectInList/>)
        }
        return(
                <div className="allProjects">
                    <div>
                        <h1>Projects</h1>
                    </div>
                    <div className="projectsTopContainer">
                        <div className="createProjectButton">
                            <button className="createProject">Create Project</button>
                        </div>

                        <div className="searchProject">

                            <input className="searchBar" placeholder="Search for projects..."/>
                        </div>
                        <div className="dropDownMenu">
                            <select className="sortDropDown">
                                <option value="alphabetically">Sort alphabetically</option>
                                <option value="date">Sort on date</option>
                            </select>
                        </div>

                    </div>

                    <div className="projectsContainer">
                        {projects}
                    </div>
                </div>


        )
    }
}

export default AllProjects;