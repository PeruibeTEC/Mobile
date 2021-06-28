import styled from 'styled-components/native';

export const Container = styled.View`
  width: 160px;
  height: 200px;
  background-color: #efefef;
  border: 1px solid #efefef;
  border-radius: 16px;
  margin-right: 4px;
`;

export const RestaurantImage = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const RestaurantName = styled.Text`
  padding: 0 8px;
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: #6d7989;
`;
