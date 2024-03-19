import React, { Component } from "react";
import cat from './cat.jpg';
import dogs2 from './dogs2.jpg';

class Products extends Component {
  render() {
    return (
      <div className="instructions2">
        <h2>Products</h2>
        <p>Welcome to our Products page, where you can explore our collection of eco-friendly pet food.</p>
        <ol>
          <li>Adult dog food</li>
          <li>Adult cat food</li>
          <li>Healthy Snacks</li>
          <li>Kitten food</li>
          <li>Puppy food</li>
        </ol>
        <h3>Our Customers Favourites</h3>
        <div className="image-container">
          <div className="instructions2">
            <img alt="cat" src={cat} />
            <h4>Tender and True Cat Food</h4>
          </div>
          <div className="instructions3">
            <img alt="dogs2" src={dogs2} />
            <h4>Wild Earth Dog Food</h4>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Products;