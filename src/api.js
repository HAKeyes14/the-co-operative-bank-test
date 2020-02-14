import axios from "axios";

export const fetchRandomJoke = async nameObj => {
  const { data } = await axios.get("https://api.icndb.com/jokes/random", {
    params: nameObj
  });
  return data.value.joke;
};

//BONUS TASK
export const fetchMultipleJokes = async count => {
  const { data } = await axios.get(
    `https://api.icndb.com/jokes/random/${count}`
  );
  return data.value.map(obj => obj.joke);
};
