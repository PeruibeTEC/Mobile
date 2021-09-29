import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import SecondaryButton from '../../../components/SecondaryButton';

import {
  ButtonGroup,
  Container,
  Description,
  MapSvg,
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
        <Button
          title="Cadastrar-se"
          onPress={() => navigation.navigate('ChooseAnOptionSignUp')}
        />
        <SecondaryButton
          title="Entrar"
          style={{ marginTop: sizes.height.dp16 }}
          onPress={() => navigation.navigate('ChooseAnOptionSignIn')}
        />
      </ButtonGroup>
    </Container>
  );
};

export default Initial;
