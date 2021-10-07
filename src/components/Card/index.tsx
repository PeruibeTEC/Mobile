import React, { ReactElement } from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import colors from '../../styles/colors';
import normalize from '../../utils/normalizeSize';

import { Container, Photo, Name, Budget, ContentContainer, Go } from './styles';

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
      <Photo source={{ uri: `${imageURL}` }} />

      <ContentContainer>
        <Name>{name}</Name>
        <Budget>R$ {budget}</Budget>
      </ContentContainer>

      <Go onPress={handleNavigateToProject} activeOpacity={0.6}>
        <Icon
          name="arrow-right"
          color={colors.light.gray800}
          size={normalize(28)}
        />
      </Go>
    </Container>
  );
}
