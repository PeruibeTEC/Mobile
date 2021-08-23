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
  ...rest
}) => {
  return (
    <Container activeOpacity={0.6} {...rest}>
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
