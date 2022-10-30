import React from "react";
import renderer from "react-test-renderer";
import BookCard from "../BookCard";

// Teste que verifica se o componente BookCard está sendo renderizado corretamente
it("renders correctly", () => {
  const tree = renderer
    .create(
      <BookCard
        title="The Hobbit"
        publication_date="1937"
        isbn="9780547928227"
        cover_url="https://m.media-amazon.com/images/I/710+HcoP38L.jpg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
}, 10000);
