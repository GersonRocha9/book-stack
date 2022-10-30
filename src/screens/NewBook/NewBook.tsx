import React from "react";
import { BackButton, Button, Text, Container, Title, Input, FormContainer, ErrorMessage, Label } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import LottieView from "lottie-react-native";

interface NewBookProps {
  title: string;
  author: string;
  publication_date: string;
  isbn: string;
}

const schema = yup.object({
  title: yup.string().required("O campo título é obrigatório"),
  author: yup.string().required("O campo autor é obrigatório"),
  publication_date: yup.string().required("O campo data de publicação é obrigatório"),
  isbn: yup.string().required("O campo ISBN é obrigatório"),
});

const NewBook = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBookProps>({
    resolver: yupResolver(schema),
  });

  const handleSaveBook = (data: NewBookProps) => {
    navigation.navigate("Home");
    console.log(data);
  };

  return (
    <Container>
      <LottieView
        source={require("../../assets/book.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200, alignSelf: "center" }}
      />
      <Title>Cadastrar novo livro</Title>

      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </BackButton>

      <FormContainer>
        <Label>Título</Label>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Título do livro"
              onChangeText={onChange}
              style={{
                borderColor: errors.title ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Label>Autor</Label>
        <Controller
          control={control}
          name="author"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Autor do livro"
              onChangeText={onChange}
              style={{
                borderColor: errors?.author?.message ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.author?.message}</ErrorMessage>

        <Label>Data de publicação</Label>
        <Controller
          control={control}
          name="publication_date"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Data de publicação"
              onChangeText={onChange}
              style={{
                borderColor: errors?.publication_date?.message ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.publication_date?.message}</ErrorMessage>

        <Label>ISBN</Label>
        <Controller
          control={control}
          name="isbn"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="ISBN"
              onChangeText={onChange}
              style={{
                borderColor: errors?.isbn?.message ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.isbn?.message}</ErrorMessage>

        <Button onPress={handleSubmit(handleSaveBook)}>
          <Text>Cadastrar</Text>
          <Feather name="arrow-right-circle" size={24} color="white" />
        </Button>
      </FormContainer>
    </Container>
  );
};

export default NewBook;
