import axios from "axios";

export const fetchRandomJoke = async nameObj => {
  const { data } = await axios.get("https://api.icndb.com/jokes/random", {
    params: nameObj
  });
  return data.value.joke;
};
