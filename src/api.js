import axios from "axios";

export const fetchRandomJoke = async () => {
  const { data } = await axios.get("https://api.icndb.com/jokes/random");
  return data.value.joke;
};
