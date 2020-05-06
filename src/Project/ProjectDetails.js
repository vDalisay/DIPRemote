import React, {Component} from 'react';
import Tag from '../components/Labels/Tag'
import './CreateProject.css';
import './ProjectDetails.css';
import TeamMember from "../components/Labels/TeamMember";

class ProjectDetails extends Component {
    render() {
        return (
            <div>
                <h1>Project name</h1>
                <div className="row">

                    <div className="column">
                        <div className="content">
                            <p>Team members</p>
                            <TeamMember name={"TestName"} role={"TestRole"}/>
                            <TeamMember name={"TestName"} role={"TestRole"}/>
                            <TeamMember name={"TestName"} role={"TestRole"}/>
                        </div>

                        <div className="content">
                            <p>Project Status</p>
                            <select>
                                <option>OK</option>
                            </select>
                        </div>

                        <div>
                            <p>Tags</p>
                            <Tag tagname={"AI"}/>
                            <Tag tagname={"C#"}/>
                            <Tag tagname={"Health Care"}/>
                        </div>
                    </div>

                    <div className="column">

                        <div className="content">
                            <p>Description</p>
                            <textarea></textarea>
                        </div>
                        <div className="content">
                            <p>Uploaded Files</p>

                        </div>

                    </div>
                </div>

            <div className='row'>
                <div>
                    <p>Discussions</p>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <button className="inputBtn">Add Discussion</button>
                    </ul>
                </div>

                    <div>
                        <p>More like this...</p>
                        <ul>
                            <li>project 1</li>
                            <li>project 6</li>
                            <li>project 98</li>
                        </ul>
                    </div>
            </div>
            </div>
        );
    }
}

export default ProjectDetails;