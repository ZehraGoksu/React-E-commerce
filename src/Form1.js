import React, { Component } from 'react'

export default class Form1 extends Component {
    state={
        username:"",
        city:"",
    };
    
    changeText=(event)=>{
        let value = event.target.value;
        let name = event.target.name;
        this.setState({[name]:value});
    };

  render() {
    return (
      <div> 
        <h4>Username</h4>
        <input name="username" type="text" onChange={this.changeText}></input>
        <p>Welcome {this.state.username}</p>
        
        <h4>City</h4>
        <input name="city" type="text" onChange={this.changeText}></input>
        <p>Your city is {this.state.city}</p>
      </div>
    )
  }
}
