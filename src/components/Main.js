import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Flowers from "./Flowers";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Emilia's Flower Shop</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/flowers">Flowers</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/flowers" element={<Flowers />}/>
            <Route path="/contact" element={<Contact />}/>
         </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;