import React,{ Component } from "react";
import Navi from "./Navi";
import Categories from "./Category";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Routes, Route} from "react-router-dom";
import NotFound from "./NotFound";
import CartDetail from "./CartDetail";
import Form1 from "./Form1";
import Form2 from "./Form2";

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
    alertify.success("'" + product.productName + "' added to cart!",2);
  };

  deleteToCart = product =>{
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id);
    this.setState({cart:newCart});
    alertify.error("'" + product.productName + "' remove to cart!",2);

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
      <Navi cart={this.state.cart} deleteToCart={this.deleteToCart}></Navi>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
          </div>
          <div className="col-9">
            <Routes>
              <Route  path="/" element={
                  <ProductList {...this.props} addToCart={this.addToCart} product={this.state.productList} currentCategory={this.state.currentCategory}/>}>
              </Route>
              <Route  path="/cart" element={
                  <CartDetail {...this.props} deleteToCart={this.deleteToCart} cart={this.state.cart}/>}>
              </Route>
              <Route path="/form1" element={<Form1/>}></Route>
              <Route path="/form2" element={<Form2/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
  }
}