import { Feather } from "@expo/vector-icons";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Button,
  ButtonsContainer,
  Container,
  FormContainer,
  Input,
  NoAccountButton,
  NoAccountContainer,
  NoAccountText,
  NoAccountTextButton,
  Subtitle,
  Text,
  Title,
} from "./styles";

interface SignUpFormDataProps {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

const SignUp = ({ navigation }: any) => {
  const { control, handleSubmit } = useForm<SignUpFormDataProps>();

  const handleSignUp = (data: SignUpFormDataProps) => {
    console.log(data);
  };

  return (
    <Container>
      <Title>Cadastrar</Title>
      <Subtitle>Preencha os dados abaixo para começar a usar o app.</Subtitle>

      <FormContainer>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => <Input placeholder="E-mail" onChangeText={onChange} />}
        />

        <Controller
          control={control}
          name="confirmEmail"
          render={({ field: { onChange } }) => <Input placeholder="Confirme o e-mail" onChangeText={onChange} />}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => <Input placeholder="Senha" onChangeText={onChange} secureTextEntry />}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange } }) => (
            <Input placeholder="Confirme a senha" onChangeText={onChange} secureTextEntry />
          )}
        />
      </FormContainer>

      <ButtonsContainer>
        <Button onPress={handleSubmit(handleSignUp)}>
          <Text>Cadastrar</Text>
          <Feather name="arrow-right-circle" size={24} color="white" />
        </Button>

        <NoAccountContainer>
          <NoAccountText>Já tem uma conta?</NoAccountText>
          <NoAccountButton
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <NoAccountTextButton>Entrar</NoAccountTextButton>
          </NoAccountButton>
        </NoAccountContainer>
      </ButtonsContainer>
    </Container>
  );
};

export default SignUp;
