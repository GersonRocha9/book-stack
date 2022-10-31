import React from "react";
import { BackButton, Button, Text, Container, Title, Input, FormContainer, ErrorMessage, Label } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import LottieView from "lottie-react-native";
import { postNewBook } from "../../hooks/post";
import { useMutation } from "@tanstack/react-query";

interface NewBookProps {
  title: string;
  cover_url?: string;
  publishing_date?: string;
  isbn: string;
}

const schema = yup.object({
  title: yup.string().required("O campo título é obrigatório"),
  cover_url: yup.string(),
  publishing_date: yup.string(),
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

  const { mutate } = useMutation(["newBook"], postNewBook);

  const onSubmit = (data: NewBookProps) => {
    mutate(data);
    navigation.navigate("Home");
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

        <Label>Capa do livro</Label>
        <Controller
          control={control}
          name="cover_url"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="URL da capa do livro"
              onChangeText={onChange}
              style={{
                borderColor: errors?.cover_url?.message ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.cover_url?.message}</ErrorMessage>

        <Label>Data de publicação</Label>
        <Controller
          control={control}
          name="publishing_date"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Data de publicação"
              onChangeText={onChange}
              style={{
                borderColor: errors?.publishing_date?.message ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.publishing_date?.message}</ErrorMessage>

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

        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Cadastrar</Text>
          <Feather name="arrow-right-circle" size={24} color="white" />
        </Button>
      </FormContainer>
    </Container>
  );
};

export default NewBook;
