import React from "react";
import { BackButton, Button, Text, Container, Title, Input, FormContainer, ErrorMessage, Label } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import LottieView from "lottie-react-native";
import { useMutation } from "@tanstack/react-query";
import { postNewAuthor } from "../../hooks/post";

interface NewAuthorProps {
  name: string;
  birth_date: string;
}

const schema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  birth_date: yup.string().required("O campo data de nascimento é obrigatório"),
});

const NewAuthor = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAuthorProps>({
    resolver: yupResolver(schema),
  });

  const { mutate } = useMutation(["newBook"], postNewAuthor);

  const onSubmit = (data: NewAuthorProps) => {
    mutate(data);
    navigation.navigate("Home");
  };

  return (
    <Container>
      <LottieView
        source={require("../../assets/pencil.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200, alignSelf: "center" }}
      />
      <Title>Cadastrar novo autor</Title>

      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </BackButton>

      <FormContainer>
        <Label>Nome</Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Nome"
              onChangeText={onChange}
              style={{
                borderColor: errors.name ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Data de nascimento</Label>
        <Controller
          control={control}
          name="birth_date"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Data de nascimento"
              onChangeText={onChange}
              style={{
                borderColor: errors?.birth_date?.message ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.birth_date?.message}</ErrorMessage>

        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Cadastrar</Text>
          <Feather name="arrow-right-circle" size={24} color="white" />
        </Button>
      </FormContainer>
    </Container>
  );
};

export default NewAuthor;
