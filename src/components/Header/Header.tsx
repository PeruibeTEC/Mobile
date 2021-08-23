import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { ReactElement } from 'react';

import { Container, Text, IconContainer } from './styles';

interface HeaderProps {
  title: string;
  onBackScreen?: boolean;
}

export function Header({ title, onBackScreen }: HeaderProps): ReactElement {
  const navigation = useNavigation();
  function handleNavigateToBackScreen() {
    navigation.goBack();
  }
  return (
    <Container>
      {onBackScreen && (
        <IconContainer activeOpacity={0.6} onPress={handleNavigateToBackScreen}>
          <Feather color="#2196f3" name="arrow-left" size={21} />
        </IconContainer>
      )}
      <Text>{title}</Text>
    </Container>
  );
}
