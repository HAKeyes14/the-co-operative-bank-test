import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomJokePage from "./components/RandomJokePage";
import { fetchRandomJoke } from "./api";
import { Router } from "@reach/router";
import SearchJokePage from "./components/SearchJokePage";

function App() {
  return (
    <div className="App">
      <Router>
        <RandomJokePage path="/" fetchRandomJoke={fetchRandomJoke} />
        <SearchJokePage path="/search" fetchRandomJoke={fetchRandomJoke} />
      </Router>
    </div>
  );
}

export default App;
