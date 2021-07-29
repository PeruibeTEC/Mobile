import React from 'react';
import { ScrollView, View,Platform, Linking } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TitleImage } from '../../components/TitleImage';
import { Content } from '../TouristSpot/components/Content';
import { Button } from '../../components/Button';
import { Border, ViewContainer, Text } from './styles';

import Feather from '@expo/vector-icons/Feather';

export function TouristSpot() {
  function handleOpenMaps(lat: number, lng: number) {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = 'Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    }) || '';

    Linking.openURL(url); 
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title="Pontos Turísticos" />
      <TitleImage
        title="Ilha do Guaraú"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/64/75/22/bom-para-passar-algumas.jpg?w=400&h=-1&s=1"
      />
      <Content
        title="Ilha do Guaraú"
        description="A Ilha do Guaraú ou melhor o “Caribe da Baixada Santista”
        é um ponto turístico famoso em Peruíbe. Uma das coisas mais impressionantes
        é que ela possui águas esverdeadas e cristalinas, ilhas com costões rochosos,
        animais marinhos,mata nativa e um incrível balé de gaivotas. Sendo assim,
        o lugar perfeito para você e sua família curtirem o dia juntos,
        seja praticando esportes ou apreciando a vista."
      />
      <Border />
      <ViewContainer>
        <Text>Ficou interessado?</Text>
        <Text style={{ marginBottom: 20 }}>
          Verifique as rotas para esse ponto turístico !!
        </Text>
      </ViewContainer>

      <View
        style={{
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Button 
          title="Rotas" 
          onPress={handleOpenMaps(-24.300955, -46.974007)}
        >
          <Feather
            style={{
              marginLeft: 5,
            }}
            name="navigation"
            color={'#FFFFFF'}
            size={18}
          />
        </Button>
      </View>
    </ScrollView>
  );
}
