import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <p>Random Jokes</p>
      </Link>
      <Link to="/search">
        <p>Search Jokes</p>
      </Link>
    </>
  );
};

export default Navbar;
