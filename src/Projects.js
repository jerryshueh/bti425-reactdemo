import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from "./MainContainer";
// import whatever else you like here

// Declare your Component here
class Overview extends Component {
    constructor() {
        //Superclass constructor
        super();

        //Set up component storage
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        //Fetch the data from Teams API
        axios.get("https://guarded-sea-97425.herokuapp.com/projects").then((res) => {
            //Set the data to storage if fetch successful
            this.setState({
                projects: res.data
            });
        }).catch((err) => {
            //Log error if something went wrong
            console.log("Data not found! Check Teams API.");
        });
    }

    render() {
        return (
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.projects.map((project, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="col-md-2">{project.ProjectName}</td>
                                            <td className="col-md-7">{project.ProjectDescription}</td>
                                            <td className="col-md-2">{moment(project.ProjectStartDate).format("MMMM D, YYYY")}</td>
                                            <td className="col-md-1">{(project.ProjectEndDate != null) ? project.ProjectEndDate : "n/a"}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

// export the component by name
export default Overview; 