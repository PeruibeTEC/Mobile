import React from 'react';
import {} from 'react-native';

import { Container, Header, Description } from './styles';
import Card from '../components/CardProfile';
import Logo from '../../../assets/logo.svg';
import Button from '../../../components/Button';

const ChooseYourProfile: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo width={212} />
      </Header>
      <Description>
        Escolha o tipo de cadastro que melhor se encaixa com você no momento
      </Description>
      <Card nameProfile="Morador" nameIcon="home-city-outline" />
      <Card nameProfile="Turista" nameIcon="map-outline" />
      <Card nameProfile="Estabelecimento" nameIcon="storefront-outline" />
      <Button title="Continuar" />
    </Container>
  );
};

export default ChooseYourProfile;
