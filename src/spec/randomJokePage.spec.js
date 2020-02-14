import { shallow } from "enzyme";
import React from "react";
import RandomJokePage from "../components/RandomJokePage";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Checks there is a button with text 'Random Joke' present", () => {
  const wrapper = shallow(<RandomJokePage />);

  const button = wrapper.find("#randomJokeButton");

  expect(button.text()).toBe("Random Joke");
});

test("Checks function is called when button is clicked", () => {
  const successResult = "Returned data";
  const successfulApiCall = jest.fn(() => Promise.resolve(successResult));

  const wrapper = shallow(
    <RandomJokePage fetchRandomJoke={successfulApiCall} />
  );

  let joke = wrapper.find(".joke");
  expect(joke.text()).toEqual("");
  let fred = wrapper.find("#randomJokeButton");
  expect(fred.text()).toEqual("Random Joke");

  fred.simulate("click");

  expect(successfulApiCall.mock.calls.length).toBe(1);

  joke = wrapper.find(".joke");
  expect(joke.text()).toEqual("Loading");
});
