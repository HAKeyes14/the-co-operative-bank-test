import { fetchRandomJoke, fetchMultipleJokes } from "../api";

describe("fetchRandomJoke", () => {
  test("returns an string", async () => {
    await expect(fetchRandomJoke()).resolves.toEqual(expect.any(String));
  });

  test("the returned string contains 'Chuck Norris' if no argument is passed", async () => {
    await expect(fetchRandomJoke()).resolves.toEqual(
      expect.stringContaining("Chuck Norris")
    );
  });

  test("the returned string contains the passed in first and last name", async () => {
    const nameObj = { firstName: "Harry", lastName: "Keyes" };
    await expect(fetchRandomJoke(nameObj)).resolves.toEqual(
      expect.stringContaining("Harry Keyes")
    );
  });
});

describe("fetchMultipleJokes", () => {
  test("returns an array", async () => {
    await expect(fetchMultipleJokes(5)).resolves.toEqual(expect.any(Array));
  });

  test("returns the same number of jokes as the passed count", async () => {
    await expect(fetchMultipleJokes(5)).resolves.toHaveLength(5);
  });

  test("returns an array of strings", async () => {
    await expect(fetchMultipleJokes(5)).resolves.toEqual([
      expect.any(String),
      expect.any(String),
      expect.any(String),
      expect.any(String),
      expect.any(String)
    ]);
  });
});
