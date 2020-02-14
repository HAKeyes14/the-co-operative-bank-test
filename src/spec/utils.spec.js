import { formatJoke, validateInput, makeNameObj } from "../utils";

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

describe("validateInput", () => {
  test("returns a boolean", () => {
    expect(validateInput("")).toEqual(expect.any(Boolean));
  });

  test("returns false if input is not 2 word", () => {
    expect(validateInput("Harry Keyes")).toEqual(true);
    expect(validateInput("Harry")).toEqual(false);
    expect(validateInput("A person with a very long name")).toEqual(false);
    expect(validateInput(" Harry Keyes ")).toEqual(true);
  });

  test("returns false if input contains non letter or string characters", () => {
    expect(validateInput("Harry1 Keyes")).toEqual(false);
    expect(validateInput("Harry Keyes!")).toEqual(false);
    expect(validateInput("'Harry' 'Keyes'")).toEqual(false);
    expect(validateInput("Harry K3y3s")).toEqual(false);
  });
});

describe("makeNameObj", () => {
  test("returns an object", () => {
    expect(makeNameObj("Harry Keyes")).toEqual(expect.any(Object));
  });

  test("returns an object with firstName and lastName keys", () => {
    const nameObj = makeNameObj("Harry Keyes");
    expect(nameObj).toHaveProperty("firstName");
    expect(nameObj).toHaveProperty("lastName");
  });

  test("returns an object with the input's first and last name assigned to the firstName and lastName keys", () => {
    const nameObj = makeNameObj("Harry Keyes");
    expect(nameObj).toHaveProperty("firstName", "Harry");
    expect(nameObj).toHaveProperty("lastName", "Keyes");
  });

  test("returns an object with the input's first and last name capitalised", () => {
    let nameObj = makeNameObj("harry keyes");
    expect(nameObj).toHaveProperty("firstName", "Harry");
    expect(nameObj).toHaveProperty("lastName", "Keyes");

    nameObj = makeNameObj("HarrY kEyEs");
    expect(nameObj).toHaveProperty("firstName", "Harry");
    expect(nameObj).toHaveProperty("lastName", "Keyes");
  });
});
