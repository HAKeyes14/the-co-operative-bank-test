import { formatJoke } from "../utils";

describe("formatJoke", () => {
  test("returns a string", () => {
    expect(formatJoke("")).toEqual(expect.any(String));
  });
  test("returns the passed string if not formatting is required", () => {
    expect(formatJoke("a joke")).toEqual("a joke");
  });
  test("returns the passed string with one double quote formatted", () => {
    expect(formatJoke("a &quot;joke")).toEqual('a "joke');
  });
  test("returns the passed string with all double quotes formatted", () => {
    expect(formatJoke("a &quot;joke&quot;")).toEqual('a "joke"');
  });
});
