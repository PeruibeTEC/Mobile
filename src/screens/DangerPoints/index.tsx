import React, { ReactElement, useRef, useState } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import MapView, { Marker, MapViewProps } from 'react-native-maps';

import { Header } from '../../components/Header/Header';
import { CircleAttuation, MarkerStylized } from './styles';

export function DangerPoints(): ReactElement {
  const refMap = useRef<MapViewProps>(null);
  const [borderColorMarker, setBorderColorMarker] =
    useState<string>('transparent');
  const [backgroundColorMarker, setBackgroundColorMarker] =
    useState<string>('transparent');

  async function onMapChange() {
    const zoom = refMap.current.__lastRegion.longitudeDelta;

    if (zoom && zoom <= 0.00984538346529007) {
      setBackgroundColorMarker('#2195f373');
      setBorderColorMarker('#2196f3');
    } else {
      setBackgroundColorMarker('transparent');
      setBorderColorMarker('transparent');
    }
  }

  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
      <Header title="Pontos de Perigo" />

      <View
        style={{
          marginTop: '7%',
          height: '88%',
          width: '88%',
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
            borderRadius: 50,
          }}
        >
          <Marker
            // onPress={() => {}}
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
                  color="#daf108"
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
