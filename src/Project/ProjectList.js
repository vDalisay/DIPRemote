import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class ProjectList extends React.Component {
    render() {
        return (
            <div className="filter-wrapper">
                <div className="left-side">
                    <button type="button" id="projectListButton" className="btn btn-primary">
                        <Link to="/CreateProject">Create Page</Link>
                    </button>
                </div>

                <div className="middle-side">

                    <div className="md-form mt-0">
                        <input className="form-control" id="searchbalk_product" type="text" placeholder="Search" aria-label="Search" />
                    </div>

                </div>

                <div id="right-side">
                    <div className="brand">

                        <div className="btn-group dropright">
                            <select className="dropdown-List">
                                    <option selected value="datum"> Datum</option>
                                    <option value="alfabet"> A/Z</option>
                            </select>
                            

                        </div>
                    </div>
                </div>
            </div>

            /*Import Component ProjectItems Vincent*/
        );
}
}

export default ProjectList;
