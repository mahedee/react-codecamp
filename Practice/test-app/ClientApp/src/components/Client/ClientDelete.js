import React, { Component } from 'react'

export default class ClientDelete extends Component {

  constructor(props) {
    super(props);

    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    // this.onChangeLastName = this.onChangeLastName.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        id : '',
        firstName: '',
        lastName: '',
    }

    //const {id} = this.props.match.params;

    const id = window.location.href.split('/')[4]

    console.log("deleted id", id);
}


  render() {
    console.log("Client Delete component");
    return (
      <div>ClientDelete</div>
    )
  }
}
