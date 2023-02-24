import React, { Component } from "react";

export default class CartDetail extends Component {
  renderCart() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Units In Stock</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {
            this.props.cart.map(element=>(
              <tr key={element.product.id}>
              <th scope="row">{element.product.id}</th>
              <td>{element.product.categoryId}</td>
              <td>{element.product.productName}</td>
              <td>{element.product.unitPrice}</td>
              <td>{element.product.unitsInStock}</td>
              <td>{element.quantity}</td>
              <td><button type="button" className="btn btn-danger btn-sm" onClick={()=>this.props.deleteToCart(element.product)}>Delete</button></td>
            </tr>
            ))
        }
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div>
        {this.renderCart()}
      </div>
    )
  }
}
