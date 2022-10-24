import { Feather } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import React from 'react';

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
} from './styles';

const Login = () => {
  return (
    <Container>
      <LottieContainer>
        <LottieView source={require("../../assets/book")} autoPlay loop />
      </LottieContainer>

      <Title>Login</Title>
      <Subtitle>Entre com sua conta</Subtitle>

      <FormContainer>
        <Input placeholder="Usuário" />

        <Input placeholder="Senha" secureTextEntry />
      </FormContainer>

      <ButtonsContainer>
        <Button onPress={() => {}}>
          <Text>Entrar</Text>
          <Feather name="arrow-right-circle" size={24} color="white" />
        </Button>

        <NoAccountContainer>
          <NoAccountText>Não tem uma conta?</NoAccountText>
          <NoAccountButton onPress={() => {}}>
            <NoAccountTextButton>Cadastre-se</NoAccountTextButton>
          </NoAccountButton>
        </NoAccountContainer>
      </ButtonsContainer>
    </Container>
  );
};

export default Login;
