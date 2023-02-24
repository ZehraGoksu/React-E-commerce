import alertify from "alertifyjs";
import React, { Component } from "react";

export default class Form2 extends Component {
    state={
        email:"",
        password:"",
        city:"",
        description:""
    };

    handleChange=event=>{
        let name=event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    };

    handleSubmit=event=>{
        event.preventDefault();
        alertify.success("Added to " + this.state.email);
        console.log(this.state.email);
        alertify.success("Added to " + this.state.password);
        alertify.success("Added to " + this.state.description);
        alertify.success("Added to " + this.state.city);
    };


  render() {
    return (
      <div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com" onChange={this.handleChange}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input name="password" type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Description
          </label>
          <textarea name="description" className="form-control" id="description" rows="3" placeholder="Description" onChange={this.handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">
            City
          </label>
          <select name="city" className="form-select" onChange={this.handleChange}>
             <option hidden>Choose one </option>
             <option value="Ankara">Ankara</option>
             <option value="Kastamonu">Kastamonu</option>
             <option value="Erzincan">Erzincan</option>
             <option value="Mardin">Mardin</option>             
             <option value="Denizli">Denizli</option>
          </select>
        </div>
        <div>
            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}
