import React from 'react';
import { TouchableOpacity } from 'react-native';

import { sizes } from '../../../../utils/predefinedSizes';

import Header from '../../components/Header';
import Button from '../../../../components/Button';

import {
  Card,
  CardIcon,
  Container,
  Content,
  Description,
  Label,
  LabelCard,
  Login,
  LoginLink,
} from './styles';

const ChooseYourProfile: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Description>
          Escolha o tipo de cadastro que melhor se encaixa com você no momento
        </Description>

        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Card>
            <CardIcon name="home-city-outline" />
            <LabelCard>Morador</LabelCard>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Card>
            <CardIcon name="map-outline" />
            <LabelCard>Turista</LabelCard>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Card>
            <CardIcon name="storefront-outline" />
            <LabelCard>Estabelecimento</LabelCard>
          </Card>
        </TouchableOpacity>
      </Content>

      <Login>
        <Label>Já tem um cadastro?</Label>
        <TouchableOpacity>
          <LoginLink>Faça login</LoginLink>
        </TouchableOpacity>
      </Login>
    </Container>
  );
};

export default ChooseYourProfile;
