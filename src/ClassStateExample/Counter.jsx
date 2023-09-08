import React, { Component } from "react";
import PropsSender from "./PropsSender";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Number Genertaor",
    };

    // this.increment = this.increment.bind(this)
  }

  increment = () => {
    console.log(this.state.count);

    // this.setState({
    //     count: this.state.count + 1,
    // });

    this.setState((x) => {
      return {
        count: x.count + 1,
      };
    });
  };

  decrement = () => {
    this.setState((x) => {
      return {
        count: x.count - 1,
      };
    });
  };

  reset = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.count !== 5 ? "other" : "its five"} </h1>
        <h1> {this.state.count} </h1>
        <button onClick={this.increment}>Add Number</button>
        <button onClick={this.decrement}>Minus Number</button>
        <button onClick={this.reset}>Reset Number</button>
      </div>
    );
  }
}
