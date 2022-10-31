import React from "react";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AuthorCard } from "../../components";

import { Container, NewAuthorButton, NewAuthorButtonContainer, Title } from "./styles";
import { getAuthors } from "../../hooks/get";
import { useQuery } from "@tanstack/react-query";

const AuthorsList = ({ navigation }: any) => {
  const { data, isLoading } = useQuery(["authorsList"], getAuthors);

  if (isLoading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  return (
    <Container>
      {data?.length ? <Title>Confira os autores cadastrados</Title> : <Title>Não há autores cadastrados</Title>}

      <NewAuthorButtonContainer>
        <NewAuthorButton onPress={() => navigation.navigate("NewAuthor")} testID="NewAuthorButton">
          <Feather name="plus" size={30} color="white" />
        </NewAuthorButton>
      </NewAuthorButtonContainer>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <AuthorCard id={item.id} name={item.name} birth_date={item.birth_date} profile_photo={item.profile_photo} />
        )}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default AuthorsList;
