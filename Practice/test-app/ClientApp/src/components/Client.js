import React, { Component } from 'react'
import { GetAllClient } from '../services/ClientService';

export default class Client extends Component {

  componentDidMount(){
    console.log("Client component -> component did mount");

    GetAllClient().then((response) => {
      console.log("client response", response.data);
      });
  }
  render() {
    return (
      <div>This is client page</div>
    )
  }
}
