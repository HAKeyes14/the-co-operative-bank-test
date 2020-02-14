import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomJokePage from "./components/RandomJokePage";
import { fetchRandomJoke, fetchMultipleJokes } from "./api";
import { Router } from "@reach/router";
import SearchJokePage from "./components/SearchJokePage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ListJokePage from "./components/ListJokePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <RandomJokePage path="/" fetchRandomJoke={fetchRandomJoke} />
        <SearchJokePage path="/search" fetchRandomJoke={fetchRandomJoke} />
        <ListJokePage path="/list" fetchMultipleJokes={fetchMultipleJokes} />
      </Router>
    </div>
  );
}

export default App;
