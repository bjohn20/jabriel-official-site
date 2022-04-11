import React, { Component } from "react";
import jabriel from "../../assets/jabriel.png";

export class Home extends Component {
  render() {
    return (
      <section id="home">
        <h1>
          <img src={jabriel} alt="Jabriel" />
        </h1>
      </section>
    );
  }
}

export default Home;
