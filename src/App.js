import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import TopBar from "./components /topbar/TopBar";
import Sidebar from "./components /sidebar/Sidebar";
import Home from "./components /pages/home/Home";
import UserList from "./components /pages/userList/UserList";
import User from "./components /pages/user/User";
import NewUser from "./components /pages/NewUser/NewUser";
import ProductList from "./components /pages/productList/ProductList";
import Product from "./components /pages/product/Product";
import NewProduct from "./components /pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:id">
            <User />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
