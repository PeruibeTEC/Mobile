import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import MapView, { Marker, MapViewProps } from 'react-native-maps';

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

  const [lat, setLat] = useState<number>(-24.31213);
  const [lon, setLon] = useState<number>(-46.988206);

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
            onPress={event => {
              setLat(event.nativeEvent.coordinate.latitude);
              setLon(event.nativeEvent.coordinate.longitude);
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Marker
              coordinate={{
                latitude: lat,
                longitude: lon,
              }}
            />
          </MapView>
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
