import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #121212;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const AlertText = styled.Text`
  font-size: 16px;
  color: red;
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 300px;
  height: 60px;
  border-radius: 5px;
  padding: 0 10px;
  color: #121212;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  width: 300px;
  flex-direction: row;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: green;
  flex: 1;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;
