import React, { Component } from "react";
//import { GetAllClient } from "../../services/ClientService";
import { Link } from "react-router-dom";
import { GetAllPackage } from "../../services/PackageService";

export default class Package extends Component {
  constructor(props) {
    super(props);

    this.OnPackageEdit = this.OnPackageEdit.bind(this);
    this.OnPackageDelete = this.OnPackageDelete.bind(this);

    this.state = {
      packages: [],
      loading: true,
      failed: false,
      error: "",
    };
  }

  componentDidMount() {
    this.populatePackageData();
    // GetAllPackage().then((response) => {
    //   //console.log("client response", response.data);
    // });
  }

  // Event handler for create button
  onPackageCreate = () => {
    console.log("client create event");
    const { history } = this.props;
    history.push("/client-create");
  };

  // Event handler for edit button
  OnPackageEdit(id) {
    //const { history } = this.props;
    //history.push("/edit/" + id);
    window.location.replace("/client-edit/" + id);
  }

  // Event handler for delete button
  OnPackageDelete(id) {
    //const { history } = this.props;
    //history.push("/delete/" + id);
    // console.log("Delete button clicked", id);
    // window.Location='/client-create';

    // const timeout = setTimeout(() => {
    // redirects to an external URL
    window.location.replace("/package-delete/" + id);
    // }, 10);

    // return () => clearTimeout(timeout);
  }

  populatePackageData() {
    GetAllPackage()
      .then((result) => {
        const response = result.data;
        this.setState({ packages: response, loading: false, error: "" });
      })
      .catch((error) => {
        this.setState({
          packages: [],
          loading: false,
          failed: true,
          error: "Packages could not be loaded!",
        });
      });
  }

  renderAllPackageTable(packages) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Client Id</th>
            <th>Package Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((_package) => (
            <tr key={_package.id}>
              <td>{_package.id}</td>
              <td>{_package.clientId}</td>
              <td>{_package.packageName}</td>
              <td>
                <Link
                  to={"/package-edit/" + _package.id}
                  className="btn btn-success"
                >
                  <i className="fa fa-edit"></i> Edit
                </Link>{" "}
                ||
                <button
                  onClick={() => this.OnPackageDelete(_package.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let content = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderAllPackageTable(this.state.packages)
    );

    return (
      <div>
        <h2>Packages</h2>
        <Link to={"/package-create"} className="btn btn-primary">
          Create
        </Link>
        {content}
      </div>
    );
  }
}
