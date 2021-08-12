import React, { ReactElement } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

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

interface IProps {
  numberOfStars: number;
  totalAvaliations: number;
}

export function AvaliationCard({
  numberOfStars,
  totalAvaliations,
}: IProps): ReactElement {
  return (
    <SafeAreaView>
      <ContainerCard>
        <View style={{ flexDirection: 'row' }}>
          <BoxRating>
            <Rating>{numberOfStars}</Rating>
            <MaterialIcons name="star" color="#fff" size={24} />
          </BoxRating>
          <AvalaiationContainer>
            <RatingText>4.5 de 5 estrelas</RatingText>
            <AvaliationText style={{ textDecorationLine: 'underline' }}>
              {`(${totalAvaliations} Avaliações)`}
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
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexDirection: 'row' }}
          >
            <AvaliationNow>Avalie agora!</AvaliationNow>
            <Text style={{ marginRight: 9, color: '#fff' }}>•</Text>

            <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
            <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
            <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
            <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
            <MaterialIcons name="star-border" color="#D4F5FF" size={18} />
          </TouchableOpacity>
        </FooterContainer>
      </ContainerCard>
    </SafeAreaView>
  );
}
