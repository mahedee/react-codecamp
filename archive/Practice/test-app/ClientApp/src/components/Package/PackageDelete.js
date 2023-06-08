import React, { Component } from "react";
import { DeletePackage, GetPackageById } from "../../services/PackageService";

export default class PackageDelete extends Component{
    constructor(props){
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            id: '',
            clientId: '',
            packageName: ''
        }
    }

    componentDidMount(){
      const id = window.location.href.split('/')[4]

      GetPackageById(id).then(response =>{
          const _package = response.data;
          this.setState({
              id : _package.id,
              clientId: _package.clientId,
              packageName: _package.packageName
          })
      })
    }

    onCancel() {
        //const { history } = this.props;
        window.location.replace("/package");
        //history.push('/employees');
    }

    onConfirmation(e){
        e.preventDefault();

        const id = window.location.href.split('/')[4]
        // const {id} = this.props.match.params;
        // const {history} = this.props;
        
        // axios.delete("api/Employees/DeleteEmployee/" + id).then(result => {
        //     history.push('/employees');
        // })

        alert("Package delete");

        DeletePackage(id).then(result => {
          window.location.replace("/package");
          })

    } 


    render(){
        return(
            <div>
                <h2>Delete</h2>
                <h3>Are you sure you want to delete this?</h3>
                <div>
                <h4>Package</h4>
                    <dl className="row">
                        <dt className="col-sm-2">
                            Id:
                        </dt>
                        <dd className="col-sm-10">
                            {this.state.id}
                        </dd>
                        <dt className="col-sm-2">
                            Client Id:
                        </dt>
                        <dd className="col-sm-10">
                            {this.state.clientId}
                        </dd>
                        <dt className="col-sm-2">
                            Package Name:
                        </dt>
                        <dd className="col-sm-10">
                            {this.state.packageName}
                        </dd>

                    </dl>

                    <form onSubmit={this.onConfirmation}>
                        <input type="hidden" asp-for="Id" />
                        <button type="submit" className="btn btn-danger">Delete</button> |
                        <button type="button" onClick={this.onCancel} className="btn btn-primary">Back to List</button>
                    </form>
                </div>
            </div>
        )
    }
}