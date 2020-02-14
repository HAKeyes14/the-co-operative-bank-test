import { shallow } from "enzyme";
import React from "react";
import RandomJokePage from "../components/RandomJokePage";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import waitForExpect from "wait-for-expect";

Enzyme.configure({ adapter: new Adapter() });

test("Checks there is a button with text 'Random Joke' present", () => {
  const wrapper = shallow(<RandomJokePage />);

  const button = wrapper.find("#randomJokeButton");

  expect(button.text()).toBe("Random Joke");
});

test("Checks function is called when button is clicked", async () => {
  const successResult = "Returned data";
  const successfulApiCall = jest.fn(() => Promise.resolve(successResult));

  const wrapper = shallow(
    <RandomJokePage fetchRandomJoke={successfulApiCall} />
  );

  const joke = wrapper.find(".joke");
  expect(joke.text()).toEqual("");

  let button = wrapper.find("#randomJokeButton");
  button.simulate("click");

  expect(successfulApiCall.mock.calls.length).toBe(1);

  const loading = wrapper.find(".loading");
  expect(loading.text()).toEqual("Loading");

  await waitForExpect(() => {
    const newJoke = wrapper.find(".joke");
    expect(newJoke.text()).toEqual("Returned data");
  });
});

test("Checks an error message is displayed when the API call fails", async () => {
  const badApiCall = jest.fn(() => Promise.reject(new Error()));

  const wrapper = shallow(<RandomJokePage fetchRandomJoke={badApiCall} />);

  let button = wrapper.find("#randomJokeButton");
  button.simulate("click");

  expect(badApiCall.mock.calls.length).toBe(1);

  await waitForExpect(() => {
    const errorMsg = wrapper.find(".errorMsg");
    expect(errorMsg.text()).toEqual(
      "Sorry, could not load a joke at this time."
    );
  });
});
