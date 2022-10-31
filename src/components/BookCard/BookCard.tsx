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

interface BooksListProps {
  id?: number;
  author_id?: number;
  title: string;
  description?: string;
  publishing_date: string;
  isbn: string;
  cover_url: string;
}

const BookCard = ({ title, publishing_date, isbn, cover_url }: BooksListProps) => {
  const handleDeleteBook = () => {
    console.log("Delete book");
  };

  const handleEditBook = () => {
    console.log("Edit book");
  };

  const convertedDate = convertDate(publishing_date);

  return (
    <Container>
      <BookImage
        source={{
          uri: cover_url,
        }}
      />
      <InfosContainer>
        <BookTitle>{title}</BookTitle>

        <BookPublicationDate>Ano: {convertedDate}</BookPublicationDate>
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
