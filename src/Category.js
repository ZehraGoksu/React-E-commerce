import React, { Component } from "react";

export default class Category extends Component {
  state={
    categoryList:[
      {categoryId:1, categoryName:"An item"},
      {categoryId:2, categoryName:"A second item"},
      {categoryId:3, categoryName:"A third item"},
      {categoryId:4, categoryName:"A fourth item"},
      {categoryId:5, categoryName:"And a fifth one"},
    ]
  }
  render() {
    return (
      <div className="col-3">
        <h4 className="fw-light">Categories</h4>
        <ul className="list-group">
          {this.state.categoryList.map(element=>
             <li className="list-group-item" key={element.categoryId}>{element.categoryName}</li>)}
        </ul>
      </div>
    );
  }
}
