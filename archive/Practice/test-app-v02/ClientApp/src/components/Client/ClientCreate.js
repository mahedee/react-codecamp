import React, { Component } from "react";
import axios from "axios";
import { AddClient } from "../../services/ClientService";

export default class ClientCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { history } = this.props;

    let clientObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    // axios.post("api/Employees/AddEmployee", employeeObj).then(result => {
    //     history.push('/employees');
    //})

    AddClient(clientObj).then((result) => {
      window.location.replace("/client");
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <h3>Add new client</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="control-label">First Name: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              ></input>
            </div>

            <div className="form-group">
              <label className="control-label">Last Name: </label>
              <input
                className="form-control"
                type="text"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              ></input>
            </div>

            <div className="form-group">
              <br></br>
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Add Client"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
