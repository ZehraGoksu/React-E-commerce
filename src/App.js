import React,{ Component } from "react";
import Navi from "./Navi";
import Categories from "./Category";
import ProductList from "./ProductList";

export default class App extends Component{
  state={
    currentCategory:"",
    currentProduct:""
  };

  changeCategory = category => {
    this.setState({currentCategory:category.categoryName});
  };

  changeProduct = product =>{
    this.setState({currentProduct: product.productId});
  }

  render(){
  return (
    <div>
      <Navi></Navi>
      <div className="container-fluid">
        <div className="row">
          <Categories product={this.state.currentProduct} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} ></Categories>
          <ProductList  product={this.state.currentProduct}  currentCategory={this.state.currentCategory} changeProduct={this.changeProduct} ></ProductList>
        </div>
      </div>
    </div>
  );
  }
}