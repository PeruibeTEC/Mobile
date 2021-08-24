import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { Container, Photo, Name, Budget, ContentContainer } from './styles';

interface CardProps {
  name: string;
  imageURL: string;
  budget: string;
}

export function Card({ name, imageURL, budget }: CardProps): ReactElement {
  const navigation = useNavigation();

  function handleNavigateToProject() {
    navigation.navigate('Project');
  }

  return (
    <Container>
      <View style={{ width: '30%' }}>
        <Photo source={{ uri: `${imageURL}` }} />
      </View>
      <ContentContainer>
        <Name>{name}</Name>
        <Budget>R$ {budget}</Budget>
      </ContentContainer>
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity onPress={handleNavigateToProject} activeOpacity={0.6}>
          <Feather name="arrow-right" color="#000000" size={28} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
