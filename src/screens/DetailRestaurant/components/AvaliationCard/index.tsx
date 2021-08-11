import React, { ReactElement } from 'react';
import { SafeAreaView, View } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import {
  ContainerCard,
  BoxRating,
  Rating,
  RatingText,
  AvalaiationContainer,
  AvaliationText,
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
            top: '30%',
            borderBottomColor: '#F0F0F0',
            borderBottomWidth: 1,
          }}
        />
      </ContainerCard>
    </SafeAreaView>
  );
}
