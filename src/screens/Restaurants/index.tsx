import React, { ReactElement } from 'react';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import { Session } from './components/Session';

import colors from '../../styles/colors';
import normalize from '../../utils/normalizeSize';

import {
  Container,
  RestaurantCover,
  Feed,
  FeaturedRestaurant,
  RestaurantName,
  RestaurantAddress,
  ViewButtonContainer,
  ViewButtonText,
  RestaurantSessions,
} from './styles';

export default function Restaurants(): ReactElement {
  const navigation = useNavigation();

  function handleNavigateToDetailRestaurant() {
    navigation.navigate('DetailRestaurant');
  }

  return (
    <Container>
      <Header />

      <Feed showsVerticalScrollIndicator={false}>
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

          <ViewButtonContainer
            activeOpacity={0.6}
            onPress={handleNavigateToDetailRestaurant}
          >
            <ViewButtonText>Visualizar</ViewButtonText>
            <Icon
              name="redo"
              size={normalize(20)}
              color={colors.light.primary50}
            />
          </ViewButtonContainer>
        </RestaurantCover>

        <RestaurantSessions>
          <Session sessionName="Restaurantes" />
          <Session sessionName="Pizzarias" />
          <Session sessionName="Lanches" />
          <Session sessionName="Cafeterias" />
        </RestaurantSessions>
      </Feed>
    </Container>
  );
}
