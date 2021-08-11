import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  margin-top: 16px;
  background-color: #2196f3;
  width: 315px;
  height: 138px;
  border-radius: 14px;
`;

export const BoxRating = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: #2ea3f7;
  border: #ffffff 1px;
  width: 89px;
  height: 50px;
  border-radius: 14px;
  left: 16px;
  top: 16px;
`;

export const Rating = styled.Text`
  font-family: 'Inter_600SemiBold';
  font-size: 28px;
  color: #ffff;
  margin-right: 4px;
`;

export const AvalaiationContainer = styled.View`
  top: 19px;
  margin-left: 32px;
`;

export const RatingText = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: 18px;
  color: #d9eaff;
`;

export const AvaliationText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 14px;
  color: #a5d4ef;
`;

export const FooterContainer = styled.View`
  top: 15%;
  left: 16px;
  flex-direction: row;
`;

export const AvaliationNow = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: 14px;
  color: #d4f5ff;
  margin-right: 9px;
`;
