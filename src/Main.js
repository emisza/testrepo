import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Chewy</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/about" element={<About />}/>
         </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;