import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  max-width: 400px;
`;

export const BookImage = styled.Image`
  width: 80px;
  height: 120px;
`;

export const InfosContainer = styled.View`
  max-width: 200px;
  margin-left: 20px;
`;

export const BookTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const BookPublicationDate = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const BookISBN = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ButtonsContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
