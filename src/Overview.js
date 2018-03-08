import React, { Component } from 'react';
import ProjectsPanel from './ProjectsPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';
import MainContainer from "./MainContainer";
// import whatever else you like here

// Declare your Component here
class Overview extends Component {
    render() {
        return (
            <MainContainer sidebar="Overview">
                <div>
                    <h1 className="page-header">Overview</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <ProjectsPanel />
                        </div>
                        <div className="col-md-4">
                            <TeamsPanel />
                        </div>
                        <div className="col-md-4">
                            <EmployeesPanel />
                        </div>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

// export the component by name
export default Overview; 