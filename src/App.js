import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomJokePage from "./components/RandomJokePage";
import { fetchRandomJoke } from "./api";
import { Router } from "@reach/router";
import SearchJokePage from "./components/SearchJokePage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <RandomJokePage path="/" fetchRandomJoke={fetchRandomJoke} />
        <SearchJokePage path="/search" fetchRandomJoke={fetchRandomJoke} />
      </Router>
    </div>
  );
}

export default App;
