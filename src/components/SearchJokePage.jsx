import React, { Component } from "react";
import { validateInput, makeNameObj, formatJoke } from "../utils";

class SearchJokePage extends Component {
  state = {
    joke: "",
    isLoading: false,
    input: "",
    error: false,
    errorMsg: ""
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    if (validateInput(input)) {
      this.setState({ isLoading: true });
      const nameObj = makeNameObj(input);
      this.props
        .fetchRandomJoke(nameObj)
        .then(joke => {
          const formattedJoke = formatJoke(joke);
          this.setState({
            joke: formattedJoke,
            isLoading: false,
            error: false,
            errorMsg: ""
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            isLoading: false,
            errorMsg: "Sorry, could not load joke at this time."
          });
        });
    } else {
      this.setState({
        error: true,
        errorMsg: "Invalid name - Please enter a first and last name.",
        isLoading: false
      });
    }
  };

  render() {
    const { input, isLoading, joke, errorMsg, error } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={input}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {isLoading ? (
          <p className="loading">Loading</p>
        ) : error ? (
          <p className="errorMsg">{errorMsg}</p>
        ) : (
          <p className="joke">{joke}</p>
        )}
      </section>
    );
  }
}

export default SearchJokePage;
