import { shallow } from "enzyme";
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import waitForExpect from "wait-for-expect";
import SearchJokePage from "../components/SearchJokePage";

Enzyme.configure({ adapter: new Adapter() });

test("Checks function is called when form is submitted", async () => {
  const successResult = "Returned data";
  const successfulApiCall = jest.fn(() => Promise.resolve(successResult));

  const wrapper = shallow(
    <SearchJokePage fetchRandomJoke={successfulApiCall} />
  );

  const joke = wrapper.find(".joke");
  expect(joke.text()).toEqual("");

  wrapper.setState({ input: "harry keyes" });
  const form = wrapper.find("form");
  form.simulate("submit", new Event("submit"));

  expect(successfulApiCall.mock.calls.length).toBe(1);

  const loading = wrapper.find(".loading");
  expect(loading.text()).toEqual("Loading");

  await waitForExpect(() => {
    const newJoke = wrapper.find(".joke");
    expect(newJoke.text()).toEqual("Returned data");
  });
});

test("Checks errorMsg is displayed when form is submitted and input is invalid", async () => {
  const successResult = "Returned data";
  const successfulApiCall = jest.fn(() => Promise.resolve(successResult));

  const wrapper = shallow(
    <SearchJokePage fetchRandomJoke={successfulApiCall} />
  );

  const joke = wrapper.find(".joke");
  expect(joke.text()).toEqual("");

  wrapper.setState({ input: "harrykeyes!" });
  const form = wrapper.find("form");
  form.simulate("submit", new Event("submit"));

  expect(successfulApiCall.mock.calls.length).toBe(0);

  await waitForExpect(() => {
    const errorMsg = wrapper.find(".errorMsg");
    expect(errorMsg.text()).toEqual(
      "Invalid name - Please enter a first and last name."
    );
  });
});

test("Checks an error message is displayed when the API call fails", async () => {
  const badApiCall = jest.fn(() => Promise.reject(new Error()));

  const wrapper = shallow(<SearchJokePage fetchRandomJoke={badApiCall} />);

  wrapper.setState({ input: "harry keyes" });
  const form = wrapper.find("form");
  form.simulate("submit", new Event("submit"));

  expect(badApiCall.mock.calls.length).toBe(1);

  await waitForExpect(() => {
    const errorMsg = wrapper.find(".errorMsg");
    expect(errorMsg.text()).toEqual("Sorry, could not load joke at this time.");
  });
});
