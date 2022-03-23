import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <ul className="socials">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Music</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
