import React from "react";
import { FlatList } from "react-native";
import { AuthorCard, BookCard } from "../../components";
import { Feather } from "@expo/vector-icons";
import { Container, NewBookButton, NewBookButtonContainer, Title } from "./styles";

const mockBooks = [
  {
    id: 1,
    author_id: 1,
    title: "The Hobbit",
    description:
      "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.",
    publication_date: "1937",
    isbn: "9780547928227",
    cover_url: "https://m.media-amazon.com/images/I/710+HcoP38L.jpg",
  },
  {
    id: 2,
    author_id: 2,
    title: "The Lord of the Rings",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
    publication_date: "1937",
    isbn: "9780544003415",
    cover_url: "https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY780_.jpg",
  },
  {
    id: 3,
    author_id: 1,
    title: "The Hobbit",
    description:
      "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.",
    publication_date: "1937",
    isbn: "9780547928227",
    cover_url: "https://m.media-amazon.com/images/I/710+HcoP38L.jpg",
  },
  {
    id: 4,
    author_id: 2,
    title: "The Lord of the Rings",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
    publication_date: "1937",
    isbn: "9780544003415",
    cover_url: "https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY780_.jpg",
  },
  {
    id: 5,
    author_id: 1,
    title: "The Hobbit",
    description:
      "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.",
    publication_date: "1937",
    isbn: "9780547928227",
    cover_url: "https://m.media-amazon.com/images/I/710+HcoP38L.jpg",
  },
  {
    id: 6,
    author_id: 2,
    title: "The Lord of the Rings",
    description:
      "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
    publication_date: "1937",
    isbn: "9780544003415",
    cover_url: "https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY780_.jpg",
  },
];

const BooksList = ({ navigation }: any) => {
  return (
    <Container>
      <Title>Confira os livros cadastrados: </Title>

      <NewBookButtonContainer>
        <NewBookButton onPress={() => navigation.navigate("NewBook")}>
          <Feather name="plus" size={30} color="white" />
        </NewBookButton>
      </NewBookButtonContainer>

      <FlatList
        data={mockBooks}
        renderItem={({ item }) => (
          <BookCard
            id={item.id}
            author_id={item.author_id}
            title={item.title}
            description={item.description}
            publication_date={item.publication_date}
            isbn={item.isbn}
            cover_url={item.cover_url}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default BooksList;
