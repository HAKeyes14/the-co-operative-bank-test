import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomJokePage from "./components/RandomJokePage";
import { fetchRandomJoke } from "./api";

function App() {
  return (
    <div className="App">
      <RandomJokePage fetchRandomJoke={fetchRandomJoke} />
    </div>
  );
}

export default App;
