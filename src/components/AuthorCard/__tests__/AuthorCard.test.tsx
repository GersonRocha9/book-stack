import React from "react";
import renderer from "react-test-renderer";
import AuthorCard from "../AuthorCard";

// Teste que verifica se o componente AuthorCard está sendo renderizado corretamente
it("renders correctly", () => {
  const tree = renderer
    .create(
      <AuthorCard
        name="J. R. R. Tolkien"
        birthdate="1892"
        profile_photo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/J._R._R._Tolkien.jpg/220px-J._R._R._Tolkien.jpg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
}, 10000);
