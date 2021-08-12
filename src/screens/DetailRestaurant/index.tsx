import React, { ReactElement } from 'react';
import { ScrollView, View, Text } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import {
  BackgroundPhoto,
  RestaurantName,
  RestaurantPhoto,
  ContainerCover,
  RestaurantLocation,
  Content,
  Divider,
  Description,
  ActionButtonsContainer,
} from './styles';

import { Header } from '../../components/Header/Header';
import { AvaliationCard } from './components/AvaliationCard';
import { TimeSession } from './components/TimeSession';
import { Button } from '../../components/Button';
import { ActionButton } from './components/ActionButton';

export function DetailRestaurant(): ReactElement {
  return (
    <ScrollView>
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

      <Content style={{ marginBottom: 16 }}>
        <AvaliationCard numberOfStars={4.7} totalAvaliations={148} />
        <Divider />
        <View style={{ width: 315, alignItems: 'center' }}>
          <Description>
            <Text style={{ fontFamily: 'Roboto_500Medium' }}>Descrição:</Text>{' '}
            Pizzaria altamente conhecida por sua variedade de produtos. Possuem
            rodízios de pizzas de variados sabores, além de um espaço moderno
            com músicas de altíssima qualidade. Um local para você, amigos e
            família comerem bem.
          </Description>
        </View>

        <Divider />
        <TimeSession closeTime={21} openTime={8} />
        <Divider style={{ marginBottom: 16 }} />

        <ActionButtonsContainer>
          <ActionButton
            iconName="whatsapp"
            text="Whatsapp"
            borderColor="#14C255"
            backgroundColor="#25D366"
          />
          <ActionButton
            iconName="phone"
            text="Ligar"
            borderColor="#188AE8"
            backgroundColor="#42A4F5"
          />
          <ActionButton
            iconName="map-marker"
            text="Rotas"
            borderColor="#C21437"
            backgroundColor="#F5365C"
          />
        </ActionButtonsContainer>

        <Divider style={{ marginBottom: 16 }} />
        <Button title="Ver Cardápio" onPress={() => {}} />
      </Content>
    </ScrollView>
  );
}
