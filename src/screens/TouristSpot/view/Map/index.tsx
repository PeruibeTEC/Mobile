import React from 'react';
import MapView from 'react-native-maps';

import { MapContainer } from './styles';

const Map: React.FC = () => {
  return (
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
  );
};

export default Map;
