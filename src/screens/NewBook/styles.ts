import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 1;
`;

export const FormContainer = styled.View`
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #121212;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  margin-bottom: 8px;
  border: 1px solid #dcdce6;
`;

export const ErrorMessage = styled.Text`
  color: #c53030;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: green;
  height: 40px;
  border-radius: 5px;
  background-color: #1ed760;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
  align-self: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;
