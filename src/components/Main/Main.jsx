import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import About from "../About";
import Music from "../Music";
import Contact from "../Contact";

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <main>
          <Header />
          <Home />
          <About />
          <Music />
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Main;
