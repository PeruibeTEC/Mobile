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
  SecondaryActions,
  SecondaryButton,
  SecondaryButtonContainer,
  SecondaryButtonText,
  TextGroup,
  Title,
} from './styles';
import { sizes } from '../../../utils/predefinedSizes';

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
        <PrimaryButton onPress={() => navigation.navigate('SignIn')}>
          <ContentButton>
            <Icon name="google" color="#DCF8FA" size={24} />
            <ButtonText style={{ color: '#DCF8FA' }}>
              Entrar com Google
            </ButtonText>
          </ContentButton>
        </PrimaryButton>

        <SecondaryActions>
          <SecondaryButtonContainer style={{ marginRight: sizes.width.dp8 }}>
            <SecondaryButton>
              <SecondaryButtonText>Cadastrar</SecondaryButtonText>
            </SecondaryButton>
          </SecondaryButtonContainer>

          <SecondaryButtonContainer style={{ marginLeft: sizes.width.dp8 }}>
            <SecondaryButton>
              <SecondaryButtonText>Entrar</SecondaryButtonText>
            </SecondaryButton>
          </SecondaryButtonContainer>
        </SecondaryActions>
      </ButtonGroup>
    </Container>
  );
};

export default Initial;
