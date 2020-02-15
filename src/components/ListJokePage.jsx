import React, { Component } from "react";
import { formatJoke } from "../utils";

class ListJokePage extends Component {
  state = {
    jokes: [],
    isLoading: true,
    error: false
  };

  fetchJokes = () => {
    this.props
      .fetchMultipleJokes(10)
      .then(jokes => {
        const formattedJokes = jokes.map(joke => {
          return formatJoke(joke);
        });
        this.setState(prevState => {
          const jokes = prevState.jokes.concat(formattedJokes);
          return {
            jokes,
            isLoading: false,
            error: false
          };
        });
      })
      .catch(() => {
        this.setState({ error: true, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchJokes();
    window.addEventListener("scroll", this.handleScroll, { once: true });
  }

  handleScroll = () => {
    const yOffset = window.pageYOffset + window.innerHeight;
    const lastItem = document.querySelector("ul > li:last-child");
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    if (yOffset > lastItemOffset) {
      window.removeEventListener("scroll", this.handleScroll);
      this.fetchJokes();
    }
    setTimeout(() => {
      window.addEventListener("scroll", this.handleScroll, { once: true });
    }, 200);
  };

  render() {
    const { jokes, isLoading, error } = this.state;
    return (
      <section>
        {isLoading ? (
          <p className="loading">Loading</p>
        ) : error ? (
          <p className="errorMsg">Sorry, could not load a joke at this time.</p>
        ) : (
          <ul className="jokes">
            {jokes.map((joke, i) => {
              return <li key={i}>{joke}</li>;
            })}
          </ul>
        )}
      </section>
    );
  }
}

export default ListJokePage;
