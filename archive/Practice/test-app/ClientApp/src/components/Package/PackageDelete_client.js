import axios from "axios";
import React, { Component } from "react";
import { DeleteClient, GetClientById } from "../../services/ClientService";

export default class PackageDelete_old extends Component{
    constructor(props){
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            id: '',
            firstName: '',
            lastName: ''
        }
    }

    componentDidMount(){
      const id = window.location.href.split('/')[4]

        GetClientById(id).then(response =>{
          const client = response.data;
          this.setState({
              id : client.id,
              firstName: client.firstName,
              lastName: client.lastName
          })
      })
    }

    onCancel() {
        //const { history } = this.props;
        window.location.replace("/client");
        //history.push('/employees');
    }

    onConfirmation(e){
        e.preventDefault();

        alert("delete confirmation");

        const id = window.location.href.split('/')[4]
        // const {id} = this.props.match.params;
        // const {history} = this.props;
        
        // axios.delete("api/Employees/DeleteEmployee/" + id).then(result => {
        //     history.push('/employees');
        // })

        DeleteClient(id).then(result => {
          window.location.replace("/client");
          })

    } 


    render(){
        return(
            <div>
                <h2>Delete</h2>
                <h3>Are you sure you want to delete this?</h3>
                <div>
                <h4>Client</h4>
                    <dl className="row">
                        <dt className="col-sm-2">
                            Id:
                        </dt>
                        <dd className="col-sm-10">
                            {this.state.id}
                        </dd>
                        <dt className="col-sm-2">
                            First Name:
                        </dt>
                        <dd className="col-sm-10">
                            {this.state.firstName}
                        </dd>
                        <dt className="col-sm-2">
                            Last Name:
                        </dt>
                        <dd className="col-sm-10">
                            {this.state.lastName}
                        </dd>

                    </dl>

                    <form onSubmit={this.onConfirmation}>
                        <input type="hidden" asp-for="Id" />
                        <button type="submit" className="btn btn-danger">Delete</button> |
                        <button onClick={this.onCancel} className="btn btn-primary">Back to List</button>
                    </form>
                </div>
            </div>
        )
    }
}