import React, { ReactElement } from 'react';
import { SafeAreaView, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { Button } from '../../components/Button';

import {
  BackgroundPhoto,
  RestaurantName,
  RestaurantPhoto,
  ContainerCover,
  RestaurantLocation,
  Content,
} from './styles';

import { Header } from '../../components/Header/Header';
import { AvaliationCard } from './components/AvaliationCard';

export function DetailRestaurant(): ReactElement {
  return (
    <SafeAreaView>
      <Header title="Primi Piatti" onBackScreen />
      <ContainerCover>
        <BackgroundPhoto
          imageStyle={{ opacity: 0.5 }}
          source={{
            uri: 'https://blog.praticabr.com/wp-content/uploads/2019/06/Pizza-Pizzaria-Forno-Forza-Express.jpg',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <RestaurantPhoto
              source={{
                uri: 'https://play-lh.googleusercontent.com/PPWXDF_BE9TQh2Nn8r4paeYKkzS-QLAtvZ6leh4Ov44DA2lh82qpBoPn_ur6G7zZTP-E',
              }}
            />
          </View>
          <RestaurantName>Pizzaria Primi Piatti</RestaurantName>
          <RestaurantLocation>
            <Feather name="map-pin" color="#FF7A00" size={14} />
            {'  Av Padre Anchieta, 800 - Jangada'}
          </RestaurantLocation>
        </BackgroundPhoto>
      </ContainerCover>
      <Content>
        <AvaliationCard />
      </Content>
    </SafeAreaView>
  );
}
