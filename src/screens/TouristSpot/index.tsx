import React from 'react';
import { ScrollView, View } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TitleImage } from '../../components/TitleImage';
import { Content } from '../TouristSpot/components/Content';
import { Border, Button, ViewContainer, Text, Label } from './styles';

import Feather from '@expo/vector-icons/Feather';

export function TouristSpot() {
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
        <Button>
          <Label>Rotas</Label>
          <Feather
            style={{
              marginLeft: 10,
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
