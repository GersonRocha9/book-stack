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

interface BooksListProps {
  id: number;
  author_id: number;
  title: string;
  description: string;
  publication_date: string;
  isbn: string;
  cover_url: string;
}

const BookCard = ({ title, publication_date, isbn, cover_url }: BooksListProps) => {
  return (
    <Container>
      <BookImage
        source={{
          uri: cover_url,
        }}
      />
      <InfosContainer>
        <BookTitle>{title}</BookTitle>

        <BookPublicationDate>Ano de publicação: {publication_date}</BookPublicationDate>
        <BookISBN>ISBN: {isbn}</BookISBN>
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

export default BookCard;
