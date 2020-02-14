import { fetchRandomJoke } from "../api";

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
