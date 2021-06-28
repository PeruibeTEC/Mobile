import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const RestaurantCover = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FeaturedRestaurant = styled.Image`
  width: 140px;
  height: 140px;
  margin: 24px 0 16px 0;

  border: 1px solid #fafafa;
  border-radius: 100px;
`;

export const RestaurantName = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  color: #fafafa;
  text-shadow: 1px 1px 2px #000;
`;

export const RestaurantAddress = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  color: #e0e5eb;
  text-shadow: 0.8px 0.8px 1px #000;
  margin-top: 8px;
`;

export const ViewButtonContainer = styled.TouchableOpacity`
  background-color: #42a5f5;
  padding: 8px 16px;
  margin: 16px 0;
  border-radius: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewButtonText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  color: #e0e5eb;
  margin-right: 4px;
`;

export const RestaurantSessions = styled.View`
  flex: 1;
`;
