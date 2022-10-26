import React from "react";
import { FlatList } from "react-native";
import AuthorCard from "../../components/AuthorCard";

import { Container, Title } from "./styles";

const mockAuthors = [
  {
    id: 1,
    name: "J. K. Rowling",
    birthdate: "31/07/1965",
    profile_photo:
      "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
  },

  {
    id: 2,
    name: "J. K. Rowling",
    birthdate: "31/07/1965",
    profile_photo:
      "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
  },

  {
    id: 3,
    name: "J. K. Rowling",
    birthdate: "31/07/1965",
    profile_photo:
      "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
  },

  {
    id: 4,
    name: "J. K. Rowling",
    birthdate: "31/07/1965",
    profile_photo:
      "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
  },

  {
    id: 5,
    name: "J. K. Rowling",
    birthdate: "31/07/1965",
    profile_photo:
      "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
  },

  {
    id: 6,
    name: "J. K. Rowling",
    birthdate: "31/07/1965",
    profile_photo:
      "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
  },
];

const AuthorsList = () => {
  return (
    <Container>
      <Title>Confira os autores cadastrados: </Title>
      <FlatList
        data={mockAuthors}
        renderItem={({ item }) => (
          <AuthorCard id={item.id} name={item.name} birthdate={item.birthdate} profile_photo={item.profile_photo} />
        )}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default AuthorsList;
