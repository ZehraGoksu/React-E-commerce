import React, { Component } from "react";

export default class ProductList extends Component {
  state={
    productList:[
      {productId:1, productName:"Mark", unitPrice:10, perUnit:2, unitInStock: 5},
      {productId:2, productName:"Paulo", unitPrice:24000, perUnit:100, unitInStock: 24},
      {productId:3, productName:"Mally", unitPrice:180, perUnit:60, unitInStock: 3}

    ]
  }
  render() {
    return (
      <div className="col-9">
        <h4 className="fw-light">Product List</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity Per Unit</th>
              <th scope="col">Units In Stock</th>
              <th scope="col"></th>
              
            </tr>
          </thead>
          <tbody>
           {
            this.state.productList.map(element=>
              <tr key={element.productId}>
              <th scope="row">{element.productId}</th>
              <td>{element.productName}</td>
              <td>{element.unitPrice}</td>
              <td>{element.perUnit}</td>
              <td>{element.unitInStock}</td>
              <td><button type="button" className="btn btn-success btn-sm">Add</button></td>
            </tr>)
           }
          </tbody>
        </table>
      </div>
    );
  }
}
