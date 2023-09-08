import React, { Component } from 'react'

export default class ComponentDiDUpdate extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

    plus = ()=>{
        this.setState((x)=>{
            return{
                counter: x.counter + 2,
            }
        })
    }



    componentDidUpdate(prevProps, precstates){
        console.log(prevProps)
        alert('do you want ubdate')
    }


  render() {
    return (
      <div>
        <h3>{this.state.counter} </h3>
        <button onClick={this.plus}>Plus++</button>
      </div>
    )
  }
}
