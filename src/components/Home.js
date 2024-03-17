import React, { Component } from "react";

import flowers from './flowers.jpg'
class Home extends Component {
  render() {
    return (
      <div className="instructions">
        <h2>Welcome to Emilia's flower store!!</h2>
<h3>     </h3>
        <img alt="flowers" src={flowers} />
        <p>We believe in the power of lowers to brighten any moment.
    Browse through our stunning collection of fresh flowers. From elegant roses to cheerful sunflowers,
    we have something for every taste and occasion.
</p>
 
        <p>Need flowers in a hurry? No problem! We offer convenient same-day delivery options.</p>
      </div>
    );
  }
}
 
export default Home;