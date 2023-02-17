import React, { Component } from 'react'

export default class CartSummary extends Component {

  renderCart(){
    return(
      <div className="dropdown fs-5 mx-4">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Your Basket
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
          {this.props.cart.map(cart => 
               <li key={cart.product.id}>
               <a className="dropdown-item" href="/">
                 {cart.product.productName}  
               <span className="badge text-bg-success mx-2"> {cart.quantity}</span>
               </a>
             </li>    
          )}  
            
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
