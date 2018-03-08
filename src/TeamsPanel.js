import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
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
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Teams</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map((team, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{team.TeamName}</td>
                                            <td>{team.Employees.length} Employees</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>
        );
    }
}

// export the component by name
export default TeamsPanel; 