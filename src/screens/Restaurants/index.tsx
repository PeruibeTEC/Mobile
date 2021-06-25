import React from 'react';
import { SafeAreaView } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Header } from '../../components/Header/Header';

import {
  Container,
  RestaurantCover,
  FeaturedRestaurant,
  RestaurantName,
  RestaurantAddress,
  ViewButtonContainer,
  ViewButtonText,
} from './styles';

const Restaurants: React.FC = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Restaurantes" />

        <RestaurantCover
          source={{
            uri: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          }}
        >
          <FeaturedRestaurant
            source={{
              uri: 'https://play-lh.googleusercontent.com/PPWXDF_BE9TQh2Nn8r4paeYKkzS-QLAtvZ6leh4Ov44DA2lh82qpBoPn_ur6G7zZTP-E',
            }}
          />

          <RestaurantName>Primi Piatti</RestaurantName>

          <RestaurantAddress>
            Av. Padre Anchieta 800 - Jangada
          </RestaurantAddress>

          <ViewButtonContainer>
            <ViewButtonText>Visualizar</ViewButtonText>
            <Icon name="redo" size={20} color="#e0e5eb" />
          </ViewButtonContainer>
        </RestaurantCover>
      </SafeAreaView>
    </Container>
  );
};

export default Restaurants;
