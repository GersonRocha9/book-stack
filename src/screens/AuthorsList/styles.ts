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

export const NewAuthorButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;

export const NewAuthorButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #7159c1;
  align-items: center;
  justify-content: center;
`;
