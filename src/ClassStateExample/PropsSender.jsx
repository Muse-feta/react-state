import React, { Component } from 'react'

export default class PropsSender extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.resetbtn}>Reset from PropsSender</button>
      </div>
    )
  }
};
