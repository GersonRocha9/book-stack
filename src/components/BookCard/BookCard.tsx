import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  BookImage,
  BookISBN,
  BookPublicationDate,
  BookTitle,
  Button,
  ButtonsContainer,
  Container,
  InfosContainer,
} from "./styles";
import { convertDate } from "../../utils/dateFunctions";
import { useMutation } from "@tanstack/react-query";
import { deleteBook } from "../../hooks/delete";

interface BooksListProps {
  id: string;
  author_id?: number;
  title: string;
  description?: string;
  publishing_date: string;
  isbn: string;
  cover_url: string;
}

const BookCard = ({ id, title, publishing_date, isbn, cover_url }: BooksListProps) => {
  const { mutate } = useMutation(["deleteBook"], deleteBook);

  const handleDeleteBook = () => {
    mutate(id, {
      onSuccess: () => {
        alert("Livro excluído com sucesso!");
      },
    });
  };

  const handleEditBook = () => {
    console.log("Edit book");
  };

  const convertedDate = convertDate(publishing_date);

  return (
    <Container>
      <BookImage source={cover_url ? { uri: cover_url } : require("../../assets/noCoverPhoto.jpeg")} />
      <InfosContainer>
        <BookTitle>{title}</BookTitle>

        <BookPublicationDate>Ano: {publishing_date ? convertedDate : "Não cadastrado"}</BookPublicationDate>

        <BookISBN>ISBN: {isbn}</BookISBN>
      </InfosContainer>

      <ButtonsContainer>
        <Button onPress={handleEditBook} title="Edit">
          <Ionicons name="create" size={24} color="black" />
        </Button>

        <Button onPress={handleDeleteBook} title="Delete">
          <Ionicons name="trash" size={24} color="red" />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default BookCard;
