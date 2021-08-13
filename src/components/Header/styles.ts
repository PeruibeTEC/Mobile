import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 55px;
  background: #fff;
  margin-top: 28px;
  align-items: center;
  border-color: #e0e5eb;
  justify-content: center;
  border-bottom-width: 1px;
  flex-direction: row;
`;

export const IconContainer = styled.TouchableOpacity`
  right: 200%;
`;

export const Text = styled.Text`
  right: 8px;
  justify-content: center;
  text-align: center;
  font-family: 'Roboto_700Bold';
  color: #404b5a;
  font-size: 18px;
`;
