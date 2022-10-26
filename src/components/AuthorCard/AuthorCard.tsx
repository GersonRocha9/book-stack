import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  BookImage,
  BookPublicationDate,
  BookTitle,
  Button,
  ButtonsContainer,
  Container,
  InfosContainer,
} from "./styles";

interface AuthorListProps {
  id: number;
  name: string;
  birthdate: string;
  profile_photo: string;
}

const AuthorCard = ({ name, birthdate, profile_photo }: AuthorListProps) => {
  return (
    <Container>
      <BookImage
        source={{
          uri: profile_photo,
        }}
      />
      <InfosContainer>
        <BookTitle>{name}</BookTitle>

        <BookPublicationDate>Data de nascimento: {birthdate}</BookPublicationDate>
      </InfosContainer>

      <ButtonsContainer>
        <Button
          onPress={() => {
            console.log("Edit");
          }}
          title="Edit"
        >
          <Ionicons name="create" size={24} color="black" />
        </Button>

        <Button
          onPress={() => {
            console.log("Delete");
          }}
          title="Delete"
        >
          <Ionicons name="trash" size={24} color="red" />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default AuthorCard;
