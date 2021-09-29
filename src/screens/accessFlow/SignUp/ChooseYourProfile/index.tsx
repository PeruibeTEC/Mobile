import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import Header from '../../components/Header';

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
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Content>
        <Description>
          Escolha o tipo de cadastro que melhor se encaixa com você no momento
        </Description>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('ChooseAnOptionSignUp');
          }}
        >
          <Card>
            <CardIcon name="home-city-outline" />
            <LabelCard>Morador</LabelCard>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('ChooseAnOptionSignUp');
          }}
        >
          <Card>
            <CardIcon name="map-outline" />
            <LabelCard>Turista</LabelCard>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('ChooseAnOptionSignUp');
          }}
        >
          <Card>
            <CardIcon name="storefront-outline" />
            <LabelCard>Estabelecimento</LabelCard>
          </Card>
        </TouchableOpacity>
      </Content>

      <Login>
        <Label>Já tem um cadastro?</Label>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseAnOptionSignIn')}
        >
          <LoginLink>Faça login</LoginLink>
        </TouchableOpacity>
      </Login>
    </Container>
  );
};

export default ChooseYourProfile;
