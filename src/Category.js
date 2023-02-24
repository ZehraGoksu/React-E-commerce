import React, { Component } from "react";

export default class Category extends Component {
  state={
    categoryList:[]
  };

  componentDidMount(){
     this.getCategory();
  };

  getCategory = () =>{
    fetch("http://localhost:3000/categories").then(response=>response.json()).then(data=>this.setState({categoryList:data}));
  }

  render() {
    return (
      <div>
        <h4 className="fw-light">Categories </h4>
        <ul className="list-group">
          {this.state.categoryList.map(category=>
             <li className="list-group-item" onClick={()=>this.props.changeCategory(category)} key={category.id}>{category.categoryName}</li>)}
        </ul>
      </div>
    );
  }
}
