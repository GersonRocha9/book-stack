import React from "react";
import { render } from "@testing-library/react-native";
import BookCard from "../BookCard";

it("renders correctly", () => {
  render(
    <BookCard
      title="The Hobbit"
      publication_date="1937"
      isbn="9780547928227"
      cover_url="https://m.media-amazon.com/images/I/710+HcoP38L.jpg"
    />
  );
}, 10000);
