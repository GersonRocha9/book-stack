import React from "react";
import { BackButton, Button, Text, Container, Title, Input, FormContainer, ErrorMessage, Label } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import LottieView from "lottie-react-native";

interface NewAuthorProps {
  name: string;
  birth_date: string;
  email: string;
}

const schema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  birth_date: yup.string().required("O campo data de nascimento é obrigatório"),
  email: yup.string().required("O campo email é obrigatório").email("O campo e-mail deve ser um e-mail válido"),
});

const NewAuthor = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAuthorProps>({
    resolver: yupResolver(schema),
  });

  const handleSaveAuthor = (data: NewAuthorProps) => {
    console.log(data);
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

        <Label>E-mail</Label>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              style={{
                borderColor: errors.email ? "red" : "#dcdce6",
              }}
            />
          )}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

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

        <Button onPress={handleSubmit(handleSaveAuthor)}>
          <Text>Cadastrar</Text>
          <Feather name="arrow-right-circle" size={24} color="white" />
        </Button>
      </FormContainer>
    </Container>
  );
};

export default NewAuthor;
