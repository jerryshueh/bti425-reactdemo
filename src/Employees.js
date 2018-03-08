import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from "./MainContainer";
// import whatever else you like here

// Declare your Component here
class EmployeesPanel extends Component {
    constructor() {
        //Superclass constructor
        super();

        //Set up component storage
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        //Fetch the data from Teams API
        axios.get("https://guarded-sea-97425.herokuapp.com/employees").then((res) => {
            //Set the data to storage if fetch successful
            this.setState({
                employees: res.data
            });
        }).catch((err) => {
            //Log error if something went wrong
            console.log("Data not found! Check Teams API.");
        });
    }

    render() {
        return (
            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name and Position</th>
                                    <th>Address</th>
                                    <th>Phone Number</th>
                                    <th>Hire Date</th>
                                    <th>Bonus Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map((employee, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="col-md-4">{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                                            <td className="col-md-3">
                                                <p>
                                                    {employee.AddressStreet}
                                                    <br />
                                                    {employee.AddressCity}, {employee.AddressState} {employee.AddressZip}
                                                </p>
                                            </td>
                                            <td className="col-md-2">{employee.PhoneNum} ext: {employee.Extension}</td>
                                            <td className="col-md-2">{moment(employee.HireDate).format("MMMM D, YYYY")}</td>
                                            <td className="col-md-1">{new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(employee.SalaryBonus)}</td>
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
export default EmployeesPanel; 