import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import {
  ButtonGroup,
  ButtonText,
  Container,
  ContentButton,
  Description,
  MapSvg,
  PrimaryButton,
  TextGroup,
  Title,
} from './styles';

const Initial: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <MapSvg />

      <TextGroup>
        <Title>Olá! Seja bem-vindo!</Title>
        <Description>
          Acesse o PeruíbeTEC e fique por dentro de tudo sobre a cidade de
          Peruíbe
        </Description>
      </TextGroup>

      <ButtonGroup>
        <PrimaryButton>
          <ContentButton>
            <Icon name="google" color="#DCF8FA" size={24} />
            <ButtonText
              style={{ color: '#DCF8FA' }}
              onPress={() => navigation.navigate('SignIn')}
            >
              Entrar com Google
            </ButtonText>
          </ContentButton>
        </PrimaryButton>
      </ButtonGroup>
    </Container>
  );
};

export default Initial;
