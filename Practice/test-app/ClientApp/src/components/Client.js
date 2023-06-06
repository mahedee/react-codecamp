import React, { Component } from "react";
import { GetAllClient } from "../services/ClientService";

export default class Client extends Component {
  constructor(props) {
    super(props);

    this.OnClientEdit = this.OnClientEdit.bind(this);
    this.OnClientDelete = this.OnClientDelete.bind(this);
    this.onClientCreate = this.onClientCreate.bind(this);

    this.state = {
      clients: [],
      loading: true,
      failed: false,
      error: "",
    };
  }

  componentDidMount() {
    this.populateClientData();
    console.log("Client component -> component did mount");

    GetAllClient().then((response) => {
      console.log("client response", response.data);
    });
  }

  // Event handler for create button
  onClientCreate() {
    const { history } = this.props;
    history.push("/create");
  }

  // Event handler for edit button
  OnClientEdit(id) {
    const { history } = this.props;
    history.push("/edit/" + id);
  }

  // Event handler for delete button
  OnClientDelete(id) {
    const { history } = this.props;
    history.push("/delete/" + id);
  }

  populateClientData() {
    GetAllClient()
      .then((result) => {
        const response = result.data;
        this.setState({ clients: response, loading: false, error: "" });
      })
      .catch((error) => {
        this.setState({
          clients: [],
          loading: false,
          failed: true,
          error: "Employess could not be loaded!",
        });
      });

    // axios.get("api/Employees/GetEmployees").then(result => {
    //     const response = result.data;
    //     this.setState({employees: response, loading: false, error: ""});
    // }).catch(error => {
    //     this.setState({employees: [], loading: false, failed: true, error: "Employess could not be loaded!"});
    // });
  }

  renderAllClientTable(clients) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>
                <button
                  onClick={() => this.OnClientEdit(client.id)}
                  className="btn btn-success"
                >
                  Edit
                </button>{" "}
                ||
                <button
                  onClick={() => this.OnClientDelete(client.id)}
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
      this.renderAllClientTable(this.state.clients)
    );

    return (
      <div>
        <h2>Clients</h2>
        <button
          onClick={() => this.onClientCreate()}
          className="btn btn-primary"
        >
          Create
        </button>
        {content}
      </div>
    );
  }
}
