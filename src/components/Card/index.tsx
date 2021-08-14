import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { Container, Photo, Name, Budget, ContentContainer } from './styles';

interface CardProps {
  name: string;
  image: string;
  budget: string;
  nameScreen: string;
}

export function Card({
  name,
  image,
  budget,
  nameScreen,
}: CardProps): ReactElement {
  const navigation = useNavigation();

  function handleNavigateToProject() {
    navigation.navigate(`${nameScreen}`);
  }

  return (
    <Container>
      <View style={{ width: '30%' }}>
        <Photo source={{ uri: `${image}` }} />
      </View>
      <ContentContainer>
        <Name>{name}</Name>
        <Budget>R$ {budget}</Budget>
      </ContentContainer>
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity>
          <Feather
            onPress={handleNavigateToProject}
            name="arrow-right"
            color="#000000"
            size={28}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
