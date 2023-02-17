import React, { Component } from "react";

export default class ProductList extends Component {
  state={

  };
  
  render() {
    return (
      <div className="col-9">
        <h4 className="fw-light">Product List - <span>{this.props.currentCategory}</span></h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity Per Unit</th>
              <th scope="col">Units In Stock</th>
              <th scope="col"></th>
              
            </tr>
          </thead>
          <tbody>
           {
            this.props.product.map(element=>
              <tr key={element.id}>
              <th scope="row">{element.id}</th>
              <td>{element.categoryId}</td>
              <td>{element.productName}</td>
              <td>{element.unitPrice}</td>
              <td>{element.quantityPerUnit}</td>
              <td>{element.unitsInStock}</td>
              <td><button type="button" className="btn btn-success btn-sm" onClick={()=>this.props.addToCart(element)}>Add</button></td>
            </tr>)
           }
          </tbody>
        </table>
      </div>
    );
  }
}
