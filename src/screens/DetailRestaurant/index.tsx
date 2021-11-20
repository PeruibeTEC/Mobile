import React from 'react';
import { Text, Linking, Platform } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import normalize from '../../utils/normalizeSize';

import SecondaryHeader from '../../components/SecondaryHeader';
import EvaluationCard from './components/EvaluationCard';
import { TimeSession } from './components/TimeSession';
import Button from '../../components/Button';
import { ActionButton } from './components/ActionButton';

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
  Container,
  Scroll,
} from './styles';

const DetailRestaurant: React.FC = () => {
  const fakeData = [
    {
      id: 1,
      phone: 5513996670465,
      lat: -24.311261,
      lng: -46.983566,
    },
  ];

  function handleOpenWhatsApp(phoneNumber: number) {
    Linking.openURL(`whatsapp://send?text=Olá!&phone=${phoneNumber}`);
  }

  function handleOpenPhone(phoneNumber: number) {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  // TODO: add this block in utils functions
  function handleOpenMaps(lat: number, lng: number) {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const label = 'Label';
    const url =
      Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`,
      }) || '';

    Linking.openURL(url);
  }

  return (
    <Container>
      <SecondaryHeader title="Primi Piatti" />

      <Scroll showsVerticalScrollIndicator={false}>
        <ContainerCover>
          <BackgroundPhoto
            imageStyle={{ opacity: 0.5 }}
            source={{
              uri: 'https://blog.praticabr.com/wp-content/uploads/2019/06/Pizza-Pizzaria-Forno-Forza-Express.jpg',
            }}
          >
            <RestaurantPhoto
              source={{
                uri: 'https://play-lh.googleusercontent.com/PPWXDF_BE9TQh2Nn8r4paeYKkzS-QLAtvZ6leh4Ov44DA2lh82qpBoPn_ur6G7zZTP-E',
              }}
            />

            <RestaurantName>Pizzaria Primi Piatti</RestaurantName>

            <RestaurantLocation>
              <Feather name="map-pin" color="#FF7A00" size={normalize(14)} />
              {'  Av Padre Anchieta, 800 - Jangada'}
            </RestaurantLocation>
          </BackgroundPhoto>
        </ContainerCover>

        <Content>
          <EvaluationCard numberOfStars={4.7} totalEvaluations={148} />

          <Divider />

          <Description>
            <Text style={{ fontFamily: 'Roboto_500Medium' }}>Descrição:</Text>{' '}
            Pizzaria altamente conhecida por sua variedade de produtos. Possuem
            rodízios de pizzas de variados sabores, além de um espaço moderno
            com músicas de altíssima qualidade. Um local para você, amigos e
            família comerem bem.
          </Description>

          <Divider />

          <TimeSession closeTime={21} openTime={8} />

          <Divider />

          <ActionButtonsContainer>
            <ActionButton
              onPress={() => handleOpenWhatsApp(fakeData[0].phone)}
              iconName="whatsapp"
              text="Whatsapp"
              borderColor="#14C255"
              backgroundColor="#25D366"
            />

            <ActionButton
              onPress={() => handleOpenPhone(fakeData[0].phone)}
              iconName="phone"
              text="Ligar"
              borderColor="#188AE8"
              backgroundColor="#42A4F5"
            />

            <ActionButton
              onPress={() => handleOpenMaps(fakeData[0].lat, fakeData[0].lng)}
              iconName="map-marker"
              text="Rotas"
              borderColor="#C21437"
              backgroundColor="#F5365C"
            />
          </ActionButtonsContainer>

          <Divider />

          <Button title="Ver Cardápio" onPress={() => {}} />
        </Content>
      </Scroll>
    </Container>
  );
};

export default DetailRestaurant;
