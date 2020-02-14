import React, { Component } from "react";
import { formatJoke } from "../utils";

class RandomJokePage extends Component {
  state = {
    joke: "",
    isLoading: false,
    error: false
  };

  handleRandomJokeClick = () => {
    this.setState({ isLoading: true });
    this.props
      .fetchRandomJoke()
      .then(joke => {
        const formattedJoke = formatJoke(joke);
        this.setState({ joke: formattedJoke, isLoading: false, error: false });
      })
      .catch(() => {
        this.setState({ error: true, isLoading: false });
      });
  };

  render() {
    const { joke, isLoading, error } = this.state;
    return (
      <section>
        <button id="randomJokeButton" onClick={this.handleRandomJokeClick}>
          Random Joke
        </button>
        {isLoading ? (
          <p className="loading">Loading</p>
        ) : error ? (
          <p className="errorMsg">Sorry, could not load a joke at this time.</p>
        ) : (
          <p className="joke">{joke}</p>
        )}
      </section>
    );
  }
}

export default RandomJokePage;
