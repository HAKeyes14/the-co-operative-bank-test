import React, { Component } from "react";

class RandomJokePage extends Component {
  state = {
    joke: "",
    isLoading: false
  };

  handleRandomJokeClick = () => {
    this.setState({ isLoading: true });
    this.props.fetchRandomJoke().then(joke => {
      this.setState({ joke, isLoading: false });
    });
  };

  render() {
    const { joke, isLoading } = this.state;
    return (
      <div>
        <button id="randomJokeButton" onClick={this.handleRandomJokeClick}>
          Random Joke
        </button>
        {isLoading ? (
          <p className="joke">Loading</p>
        ) : (
          <p className="joke">{joke}</p>
        )}
      </div>
    );
  }
}

export default RandomJokePage;
