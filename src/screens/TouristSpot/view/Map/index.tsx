import React from 'react';
import { Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Pin from './components/Pin';

import { MapContainer } from './styles';

const points = [
  {
    cd: 1,
    name: 'Ruinas do Abarebebe',
    url: 'https://revistanove.com.br/wp-content/uploads/2018/10/ruinas-do-abarebebe-revista-nove-foto-christian-jauch2.jpg',
    lat: '-24.271746',
    log: '-46.9422438',
  },
];

const Map: React.FC = () => {
  return (
    <MapContainer>
      <MapView
        initialRegion={{
          latitude: -47.022629,
          longitude: -46.988206,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {points.map(point => (
          <Marker
            key={point.cd}
            coordinate={{
              latitude: parseFloat(point.lat),
              longitude: parseFloat(point.log),
            }}
          >
            <Pin />
          </Marker>
        ))}
      </MapView>
    </MapContainer>
  );
};

export default Map;
