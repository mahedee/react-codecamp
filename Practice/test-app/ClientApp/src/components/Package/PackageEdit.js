import React, { Component } from "react";
import axios from "axios";
import { AddClient, GetAllClient } from "../../services/ClientService";
import { AddPackage, GetPackageById } from "../../services/PackageService";

export default class PackageEdit extends Component {
    constructor(props) {
        super(props);
        this.onChangePackageName = this.onChangePackageName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          id: 0,
          clientId: 0,
          packageName: "",
          lastName: "",
          clients: [{id: 0,
                    firstName: "",
                    }],
          loading: true,
          error: "There is an error!",
        };
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
        // if (e.target.name === 'isActive') {
        //   this.setState({
        //       isActive : e.target.checked })
        // }
    
        // if (e.target.name === "countryId") {
        //   this.getEntitiesByCountryId(e.target.value);
        // }
    
      }
    
    
      componentDidMount() {

        const packageId = window.location.href.split('/')[4]
        GetPackageById(packageId).then((result) => {
            const response = result.data;
            this.setState({ clientId: response.clientId, packageName: response.packageName, 
                loading: false, error: "" });
            console.log("load client id: ", response.clientId);
          })
          .catch((error) => {
            this.setState({
                clientId: 0,
              loading: false,
              error: "Clients could not be loaded!",
            });
          });

        //Get all client for drop downlist
        GetAllClient()
          .then((result) => {
            const response = result.data;
            this.setState({ clients: response, loading: false, error: "" });
            console.log("load client", result.data);
          })
          .catch((error) => {
            this.setState({
              clients: [],
              loading: false,
              error: "Clients could not be loaded!",
            });
          });

    
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }
    
      onChangePackageName(e) {
        this.setState({
          packageName: e.target.value,
        });
      }
    
      onChangeLastName(e) {
        this.setState({
          lastName: e.target.value,
        });
      }
    
      onSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
    
        let packageObj = {
          id: 0,
          clientId: this.state.clientId,
          packageName: this.state.packageName,
        };
    
        // axios.post("api/Employees/AddEmployee", employeeObj).then(result => {
        //     history.push('/employees');
        //})
    
        console.log("Package obj", packageObj);
        AddPackage(packageObj).then((result) => {
          window.location.replace("/package");
        });
      }
    
      render() {
        let ddlClients;
    
        if (this.state.loading) {
          ddlClients = "Loading...";
          //ddlEntities = "Loading...";
        } else {
          ddlClients = this.state.clients.map((item, i) => {
            //if(item.id == 3) let IsSelected = true;

            return (
              <option key={item.id} value={item.id}>
                {item.firstName}
              </option>
            );
          });
        }
    
        return (
          <div className="row">
            <div className="col-md-4">
              <h3>Edit package</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label className="control-label">Client: </label>
    
                  <select
                    name="clientId"
                    className="form-control"
                    onChange={this.onChange}
                    value={this.state.clientId} //for default select
     
                  >
                    {ddlClients}
                  </select>
                </div>
    
                <div className="form-group">
                  <label className="control-label">Package Name: </label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.packageName}
                    onChange={this.onChangePackageName}
                  ></input>
                </div>
    
                <div className="form-group">
                  <br></br>
                </div>
    
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Package"
                    className="btn btn-primary"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        );
      }
}