import React, { Component } from "react";

export default class ProductList extends Component {
  state={
    productList:[
      {productId:1, productName:"Mark", unitPrice:10, perUnit:2, unitInStock: 5},
      {productId:2, productName:"Paulo", unitPrice:24000, perUnit:100, unitInStock: 24},
      {productId:3, productName:"Mally", unitPrice:180, perUnit:60, unitInStock: 3},
      {productId:4, productName:"Mark", unitPrice:10, perUnit:2, unitInStock: 5},
      {productId:5, productName:"Paulo", unitPrice:24000, perUnit:100, unitInStock: 24},
      {productId:6, productName:"Mally", unitPrice:180, perUnit:60, unitInStock: 3},
      {productId:7, productName:"Mark", unitPrice:10, perUnit:2, unitInStock: 5},
      {productId:8, productName:"Paulo", unitPrice:24000, perUnit:100, unitInStock: 24},
      {productId:9, productName:"Mally", unitPrice:180, perUnit:60, unitInStock: 3},
      {productId:11, productName:"Mark", unitPrice:10, perUnit:2, unitInStock: 5},
      {productId:12, productName:"Paulo", unitPrice:24000, perUnit:100, unitInStock: 24},
      {productId:13, productName:"Mally", unitPrice:180, perUnit:60, unitInStock: 3},
      {productId:14, productName:"Mark", unitPrice:10, perUnit:2, unitInStock: 5},
      {productId:15, productName:"Paulo", unitPrice:24000, perUnit:100, unitInStock: 24},
      {productId:16, productName:"Mally", unitPrice:180, perUnit:60, unitInStock: 3},
      {productId:17, productName:"Mark", unitPrice:10, perUnit:2, unitInStock: 5},
      {productId:18, productName:"Paulo", unitPrice:24000, perUnit:100, unitInStock: 24},
      {productId:19, productName:"Mally", unitPrice:180, perUnit:60, unitInStock: 3}

    ]

  }
  render() {
    return (
      <div className="col-9">
        <h4 className="fw-light">Product List - <span>{this.props.currentCategory}</span></h4>
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
              <td><button type="button" className="btn btn-success btn-sm" onClick={()=>this.props.changeProduct(element)}>Add</button></td>
            </tr>)
           }
          </tbody>
        </table>
      </div>
    );
  }
}
