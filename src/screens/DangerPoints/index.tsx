import React, { ReactElement, useRef, useState } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import MapView, { Marker, MapViewProps } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header/Header';
import { CircleAttuation, MarkerStylized } from './styles';

export function DangerPoints(): ReactElement {
  const navigation = useNavigation();

  const refMap = useRef<MapViewProps>(null);

  const [borderColorMarker, setBorderColorMarker] =
    useState<string>('transparent');
  const [backgroundColorMarker, setBackgroundColorMarker] =
    useState<string>('transparent');

  async function onMapChange() {
    const zoom = refMap.current.__lastRegion.longitudeDelta;

    if (zoom && zoom <= 0.00984538356529007) {
      setBackgroundColorMarker('#ff3c0060');
      setBorderColorMarker('#ff2600');
    } else {
      setBackgroundColorMarker('transparent');
      setBorderColorMarker('transparent');
    }
  }

  function handlePressPoint() {
    navigation.navigate('Incidents');
  }

  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
      <Header title="Pontos de Perigo" />

      <View
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 50,
        }}
      >
        <MapView
          ref={refMap}
          onRegionChange={onMapChange}
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
        >
          <Marker
            onPress={() => {
              handlePressPoint();
            }}
            coordinate={{
              latitude: -24.31213,
              longitude: -46.988206,
            }}
          >
            <CircleAttuation
              style={{
                backgroundColor: backgroundColorMarker,
                borderColor: borderColorMarker,
              }}
            >
              <MarkerStylized>
                <Feather
                  style={{ transform: [{ rotate: '-225deg' }] }}
                  name="alert-triangle"
                  color="#ffff"
                  size={18}
                />
              </MarkerStylized>
            </CircleAttuation>
          </Marker>
        </MapView>
      </View>
    </View>
  );
}
