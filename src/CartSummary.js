import React, { Component } from 'react';
import { Link } from'react-router-dom';

export default class CartSummary extends Component {

  renderCart(){
    return(
      <div className="dropdown fs-5 mx-4">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Your Basket
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
          {this.props.cart.map(cart => 
               <li className='d-flex align-items-center' key={cart.product.id}>
               <span className="badge text-bg-danger mx-2" onClick={()=>this.props.deleteToCart(cart.product)}>X</span>
               <a className="dropdown-item" href="/">
                 {cart.product.productName}  
               </a>
               <span className="badge text-bg-success mx-2"> {cart.quantity}</span>
             </li>    
            )}  
            <hr className="m-1"></hr>
              <li className="d-flex justify-content-center align-items-center">
                <Link to="cart" className="text-decoration-none text-black fw-bold">Go to cart</Link>
              </li>
        </ul>

      </div>)
  }

  emptyCart(){
    return(
        <div className="dropdown fs-5 mx-4">
            <p>Empty Card</p>
        </div>
    )
  }

  render() {
    return (
        <div>
           {this.props.cart.length>0?this.renderCart():this.emptyCart()}
        </div>
    )
  }
}
