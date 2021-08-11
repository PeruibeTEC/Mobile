import styled from 'styled-components/native';

export const ContainerCover = styled.View`
  background-color: black;
  width: 100%;
  height: 255px;
`;

export const BackgroundPhoto = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const RestaurantPhoto = styled.Image`
  border-radius: 70px;
  width: 140px;
  height: 140px;
  opacity: 1;
`;

export const RestaurantName = styled.Text`
  font-family: 'Inter_500Medium';
  color: #d0d0d0;
  font-size: 16px;
  margin-top: 24px;
  left: 30px;
`;

export const RestaurantLocation = styled.Text`
  font-family: 'Inter_500Medium';
  color: #f0f0f0;
  font-size: 14px;
  margin-top: 10px;
  left: 30px;
`;

export const Content = styled.View`
  align-items: center;
`;
