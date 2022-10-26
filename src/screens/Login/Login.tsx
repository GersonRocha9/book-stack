import { Feather } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Button,
  ButtonsContainer,
  Container,
  FormContainer,
  Input,
  LottieContainer,
  NoAccountButton,
  NoAccountContainer,
  NoAccountText,
  NoAccountTextButton,
  Subtitle,
  Text,
  Title,
} from "./styles";

interface LoginFormDataProps {
  email: string;
  password: string;
}

const Login = ({ navigation }: any) => {
  const { control, handleSubmit } = useForm<LoginFormDataProps>();

  const handleLogin = (data: LoginFormDataProps) => {
    console.log(data);
  };

  return (
    <Container>
      <LottieContainer>
        <LottieView source={require("../../assets/book")} autoPlay loop />
      </LottieContainer>

      <Title>Login</Title>
      <Subtitle>Entre com sua conta</Subtitle>

      <FormContainer>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => <Input placeholder="E-mail" onChangeText={onChange} />}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => <Input placeholder="Senha" secureTextEntry onChangeText={onChange} />}
        />
      </FormContainer>

      <ButtonsContainer>
        <Button onPress={handleSubmit(handleLogin)}>
          <Text>Entrar</Text>
          <Feather name="arrow-right-circle" size={24} color="white" />
        </Button>

        <NoAccountContainer>
          <NoAccountText>Não tem uma conta?</NoAccountText>
          <NoAccountButton
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <NoAccountTextButton>Cadastre-se</NoAccountTextButton>
          </NoAccountButton>
        </NoAccountContainer>
      </ButtonsContainer>
    </Container>
  );
};

export default Login;
