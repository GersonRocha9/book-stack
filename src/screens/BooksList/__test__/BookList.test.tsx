import React from "react";
import BooksList from "../BooksList";
import { render, fireEvent } from "@testing-library/react-native";

it("renders correctly", () => {
  render(<BooksList books={[]} />);
}, 10000);

it("render NewBook when NewBookButton is pressed", () => {
  const navigation = { navigate: jest.fn() };
  const { getByTestId } = render(<BooksList navigation={navigation} books={[]} />);
  fireEvent.press(getByTestId("NewBookButton"));
  expect(navigation.navigate).toHaveBeenCalledWith("NewBook");
});
