import React from 'react';
import RightContent from "./RightContent/RightContent";
import "./ProjectInList.css";

const ProjectInList = props => (
    //<div className="main">
        <div className="backdropColor">
            <div className="projectTitle">
                <h5 className="titleText">Visualization of furniture using Augmented Reality on both Android and IOS devices.</h5>
            </div>
            <div className="projectContent">
                <div className="leftContent">
                    <div className="tagsSection">
                        <p id="tag">Android</p>
                        <p id="tag">IOS</p>
                        <p id="tag">AR</p>
                        <p id="tag">Furniture</p>
                    </div>
                    <div className="authorSection">
                        <p>By M. Hopperburg 13-2-2020 </p>
                    </div>
                </div>
                <div className="rightContent">
                    <div className="descriptionText">
                        <RightContent isImage={false}/>
                    </div>
                </div>
            </div>
        </div>
    //</div>

);

export default ProjectInList;