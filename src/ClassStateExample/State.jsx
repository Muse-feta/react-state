import React, { Component } from 'react'

export default class State extends Component {

    constructor (props) {
        super();
        this.state = {
          naame: "Muse",
          lname: "Feta",
          name: props.name,
          sstatus: props.sstatus
        };
    }
  render() {
    return (
      <div>
        <h1>
          Hi: {this.state.naame} {this.state.lname} {this.state.name} {this.props.sstatus}
        </h1>
      </div>
    );
  }
}
