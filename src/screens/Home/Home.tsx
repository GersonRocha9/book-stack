import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { AlertText, Button, ButtonContainer, Container, FormContainer, Input, Title } from './styles';

interface IFormInputs {
  bookName: string;
  authorName: string;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <Container>
      <Title>Books</Title>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Digite o nome do livro" {...register("bookName")} />
        <AlertText>{errors.bookName?.message}</AlertText>
        <Input placeholder="Digite o nome do Autor" {...register("authorName")} />
        <AlertText>{errors.authorName?.message}</AlertText>

        <ButtonContainer>
          <Button type="submit">
            <Title>Salvar</Title>
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Home;
