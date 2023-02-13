import React from "react";
import Navi from "./Navi";
import Categories from "./Category";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Navi></Navi>
      <div className="container-fluid">
        <div className="row">
          <Categories></Categories>
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
}

export default App;
