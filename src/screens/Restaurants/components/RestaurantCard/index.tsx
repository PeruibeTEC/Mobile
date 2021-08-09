import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Container, RestaurantImage, RestaurantName } from './styles';

interface RestaurantCardProps extends TouchableOpacityProps {
  restaurantName: string;
  imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurantName,
  imageUrl,
}) => {
  return (
    <Container>
      <RestaurantImage
        source={{
          uri: imageUrl,
        }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <RestaurantName numberOfLines={1}>{restaurantName}</RestaurantName>
      </View>
    </Container>
  );
};

export { RestaurantCard };
