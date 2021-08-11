import React, { ReactElement } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import {
  ContainerCard,
  BoxRating,
  Rating,
  RatingText,
  AvalaiationContainer,
  AvaliationText,
  AvaliationNow,
  FooterContainer,
} from './styles';

export function AvaliationCard(): ReactElement {
  return (
    <SafeAreaView>
      <ContainerCard>
        <View style={{ flexDirection: 'row' }}>
          <BoxRating>
            <Rating>4.5</Rating>
            <MaterialIcons name="star" color="#fff" size={24} />
          </BoxRating>
          <AvalaiationContainer>
            <RatingText>4.5 de 5 estrelas</RatingText>
            <AvaliationText style={{ textDecorationLine: 'underline' }}>
              (217 Avaliações)
            </AvaliationText>
          </AvalaiationContainer>
        </View>
        <View
          style={{
            top: '20%',
            borderBottomColor: '#F0F0F0',
            borderBottomWidth: 1,
          }}
        />
        <FooterContainer>
          <AvaliationNow>Avalie agora!</AvaliationNow>
          <Text style={{ marginRight: 9, color: '#fff' }}>•</Text>

          <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
          <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
          <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
          <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
          <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
        </FooterContainer>
      </ContainerCard>
    </SafeAreaView>
  );
}
