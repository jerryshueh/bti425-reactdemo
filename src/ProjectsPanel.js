import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
// import whatever else you like here

// Declare your Component here
class ProjectsPanel extends Component {
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
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((project, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{project.ProjectName}</td>
                                            <td>Active {moment().diff(project.ProjectStartDate, "days")} Days</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        );
    }
}

// export the component by name
export default ProjectsPanel; 