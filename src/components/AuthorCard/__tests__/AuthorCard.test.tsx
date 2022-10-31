import React from "react";
import { render } from "@testing-library/react-native";
import AuthorCard from "../AuthorCard";

it("renders correctly", () => {
  render(
    <AuthorCard
      name="J. R. R. Tolkien"
      birthdate="1892"
      profile_photo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/J._R._R._Tolkien.jpg/220px-J._R._R._Tolkien.jpg"
    />
  );
}, 10000);
