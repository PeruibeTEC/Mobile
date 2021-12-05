import React, { useState } from 'react';

import SecondaryHeader from '../../components/SecondaryHeader';
import Switch from './components/Switch';

import Map from './view/Map';
import List from './view/List';

import normalize from '../../utils/normalizeSize';
import { Container, Footer } from './styles';

const TouristSpot: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<'map' | 'list'>('map');

  return (
    <Container>
      <SecondaryHeader title="Pontos turísticos" />

      {displayMode === 'map' ? <Map /> : <List />}

      <Footer>
        <Switch
          style={{ paddingHorizontal: 50, marginVertical: normalize(32) }}
          options={[
            { label: 'Mapa', value: 'map' },
            { label: 'Lista', value: 'list' },
          ]}
          onPress={value => {
            if (value === 'map') {
              setDisplayMode('map');
            } else {
              setDisplayMode('list');
            }
          }}
        />
      </Footer>
    </Container>
  );
};

export default TouristSpot;
