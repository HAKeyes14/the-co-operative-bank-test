import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <p>Random Jokes</p>
      </Link>
      <Link to="/search">
        <p>Search Jokes</p>
      </Link>
      <Link to="/list">
        <p>Jokes List</p>
      </Link>
    </nav>
  );
};

export default Navbar;
