import React from "react";
import { FlatList } from "react-native";
import { BookCard } from "../../components";
import { Feather } from "@expo/vector-icons";
import { Container, NewBookButton, NewBookButtonContainer, Title } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../hooks/get";

const BooksList = ({ navigation }: any) => {
  const { data, isLoading } = useQuery(["booksList"], getBooks);

  if (isLoading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  return (
    <Container>
      {data?.length ? <Title>Confira os livros cadastrados</Title> : <Title>Não há livros cadastrados</Title>}

      <NewBookButtonContainer>
        <NewBookButton onPress={() => navigation.navigate("NewBook")} testID="NewBookButton">
          <Feather name="plus" size={30} color="white" />
        </NewBookButton>
      </NewBookButtonContainer>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, publishing_date, isbn, cover_url, author_id } }) => (
          <BookCard
            id={id}
            author_id={author_id}
            title={title}
            publishing_date={publishing_date}
            isbn={isbn}
            cover_url={cover_url}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default BooksList;
