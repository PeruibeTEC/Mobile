import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

import Header from '../../../components/Header';
import Button from '../../../../../components/Button';
import { sizes } from '../../../../../utils/predefinedSizes';

import {
  Container,
  Content,
  Description,
  Label,
  Login,
  LoginLink,
  MapContainer,
} from './styles';

const LocationOnMap: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Content>
        <Description>Selecione o local do seu estabelecimento</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: -24.31213,
              longitude: -46.988206,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </MapContainer>

        <Button
          title="Continuar"
          style={{ marginTop: sizes.height.dp40 }}
          onPress={() => {
            navigation.navigate('Contact');
          }}
        />
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

export default LocationOnMap;
