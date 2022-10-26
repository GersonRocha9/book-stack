import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f5f9;
  align-items: center;
`;

export const LottieContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
`;

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 24px;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ButtonsContainer = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: #1ed760;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

export const NoAccountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NoAccountText = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const NoAccountTextButton = styled.Text`
  color: tomato;
  font-size: 16px;
  font-weight: bold;
`;

export const NoAccountButton = styled.TouchableOpacity`
  margin-left: 5px;
`;
