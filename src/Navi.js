//Compnentlerin ilk harfi büyük yazılır yani pascalcase
//Üç adet component yapısı var. Class Component - Function Component - Redux Component
//Class component içerisinde farklı farklı fonksiyonlar yazıp render edilen alan içerisinde çağırabiliriz.

import React, { Component } from "react";

export default class Navi extends Component {
  state = {
    navList: [
      { navLinkId: 1, navLinkName: "Home" },
      { navLinkId: 2, navLinkName: "Link" },
    ]
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top bg-success p-0 mb-2 fs-4">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <a className="navbar-brand mx-3" href="/">
            <img src="img\logo.png" alt="Site logosu" width={70}></img>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           {
            this.state.navList.map(listElement=>
              <li className="nav-item" key={listElement.navLinkId}>
              <a className="nav-link active" aria-current="page" href="/">
               {listElement.navLinkName}
              </a>
            </li>
            )
           }
          </ul>
        </div>

        <div className="dropdown fs-5 mx-4">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Your Basket
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a className="dropdown-item" href="/">
                Some news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
