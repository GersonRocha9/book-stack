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
import { convertDate } from "../../utils/dateFunctions";
import { useMutation } from "@tanstack/react-query";
import { deleteAuthor } from "../../hooks/delete";

interface AuthorListProps {
  id: string;
  name: string;
  birth_date: string;
  profile_photo: string;
}

const AuthorCard = ({ id, name, birth_date, profile_photo }: AuthorListProps) => {
  const { mutate } = useMutation(["deleteBook"], deleteAuthor);

  const handleDeleteAuthor = () => {
    mutate(id, {
      onSuccess: () => {
        alert("Autor excluído com sucesso!");
      },
    });
  };

  const handleEditAuthor = () => {
    console.log("Edit Author");
  };

  const convertedDate = convertDate(birth_date);

  return (
    <Container>
      <BookImage source={profile_photo ? { uri: profile_photo } : require("../../assets/noProfilePhoto.png")} />
      <InfosContainer>
        <BookTitle>{name}</BookTitle>

        <BookPublicationDate>{convertedDate}</BookPublicationDate>
      </InfosContainer>

      <ButtonsContainer>
        <Button onPress={handleEditAuthor} title="Edit">
          <Ionicons name="create" size={24} color="black" />
        </Button>

        <Button onPress={handleDeleteAuthor} title="Delete">
          <Ionicons name="trash" size={24} color="red" />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default AuthorCard;
