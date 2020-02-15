import React, { Component } from "react";
import { Link } from "@reach/router";

class Navbar extends Component {
  state = {
    active: "random"
  };

  render() {
    const { active } = this.state;
    return (
      <nav className="Navbar">
        <Link
          to="/"
          onClick={() => {
            this.setState({ active: "random" });
          }}
          className={active === "random" && "active"}
        >
          <p>Random Jokes</p>
        </Link>
        <Link
          to="/search"
          onClick={() => {
            this.setState({ active: "search" });
          }}
          className={active === "search" && "active"}
        >
          <p>Search Jokes</p>
        </Link>
        <Link
          to="/list"
          onClick={() => {
            this.setState({ active: "list" });
          }}
          className={active === "list" && "active"}
        >
          <p>Jokes List</p>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
