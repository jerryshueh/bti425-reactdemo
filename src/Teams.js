import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from "./MainContainer";
// import whatever else you like here

// Declare your Component here
class TeamsPanel extends Component {
    constructor() {
        //Superclass constructor
        super();

        //Set up component storage
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        //Fetch the data from Teams API
        axios.get("https://guarded-sea-97425.herokuapp.com/teams").then((res) => {
            //Set the data to storage if fetch successful
            this.setState({
                teams: res.data
            });
        }).catch((err) => {
            //Log error if something went wrong
            console.log("Data not found! Check Teams API.");
        });
    }

    render() {
        return (
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Projects</th>
                                    <th>Number of Members</th>
                                    <th>Leader</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teams.map((team, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="col-md-2">{team.TeamName}</td>
                                            <td className="col-md-4"><ul>{
                                                team.Projects.map((project) => {
                                                    return (
                                                        <li>{project.ProjectName}</li>
                                                    );
                                                })
                                            }</ul></td>
                                            <td className="col-md-2">{team.Employees.length} Employees</td>
                                            <td className="col-md-3">{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
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
export default TeamsPanel; 