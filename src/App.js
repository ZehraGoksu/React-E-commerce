import React,{ Component } from "react";
import Navi from "./Navi";
import Categories from "./Category";
import ProductList from "./ProductList";

export default class App extends Component{
  state={
    currentCategory:"",
    productList:[],
    cart:[]
  };

  changeCategory = category => {
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id);
  };

  addToCart = product =>{
    let newCart = this.state.cart;
    var addedCart = newCart.find(added=>added.product.id === product.id);
    if(addedCart){
      addedCart.quantity+=1;
    }
    else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({newCart});
  }
      
  componentDidMount(){
    this.getProducts();
  };

  getProducts= categoryId =>{
    let url = "http://localhost:3000/products";
    if(categoryId)
    {
      url += "?categoryId=" + categoryId;
    }
    fetch(url).then(response=>response.json()).then(data=>this.setState({productList:data}));
  };

  render(){
  return (
    <div>
      <Navi cart={this.state.cart}></Navi>
      <div className="container-fluid">
        <div className="row">
          <Categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} ></Categories>
          <ProductList addToCart={this.addToCart} product={this.state.productList} currentCategory={this.state.currentCategory}></ProductList>
        </div>
      </div>
    </div>
  );
  }
}