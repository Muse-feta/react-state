import React, { Component } from 'react'

export default class ComponentWillMountandDidMount extends Component {
  constructor() {
    super();
    this.state = {
        randomText: '',
    }
  }

  componentWillMount() {
    this.setState({
        randomText: 'loading...',
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({randomText: "didmount"});
    }, 1000);
  }




  render() {
    return <div>
        <h2>{this.state.randomText} </h2>
    </div>;
  }
}
