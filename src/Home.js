import React, { Component } from "react";
import dogs1 from './dogs1.jpg'

class Home extends Component {
  render() {
    return (
          <div className="instructions">
        <h2>Welcome to Chewy!!</h2>
<h3> </h3>
<img alt="dogs1" src={dogs1} />
        <p>At Chewy, we're on a mission to redefine pet nutrition with eco-friendly options.
            We provide wholesome, responsibly sourced pet food, minimizing our enviromental
            footprint from ingredients to packaging.
        </p>
 
        <p>Because we care!</p>
      </div>
    );
  }
}
 
export default Home;