import React from "react";
import AuthorsList from "../AuthorsList";
import { render, fireEvent } from "@testing-library/react-native";

it("renders correctly", () => {
  render(<AuthorsList authors={[]} />);
}, 10000);

it("render NewAuthor when NewAuthorButton is pressed", () => {
  const navigation = { navigate: jest.fn() };
  const { getByTestId } = render(<AuthorsList navigation={navigation} authors={[]} />);
  fireEvent.press(getByTestId("NewAuthorButton"));
  expect(navigation.navigate).toHaveBeenCalledWith("NewAuthor");
});
