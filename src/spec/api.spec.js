import { fetchRandomJoke } from "../api";

test("returns an string", async () => {
  await expect(fetchRandomJoke()).resolves.toStrictEqual(expect.any(String));
});
