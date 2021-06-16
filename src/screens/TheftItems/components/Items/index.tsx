import React from 'react';

import { FlatList } from 'react-native';
import { Container, Title, Description } from './styles';

export function Items() {
  return (
    <Container>
      <Title>Itens Roubados:</Title>
      <FlatList
        data={[
          { key: '1x Celular iPhone 6s Dourado' },
          { key: '2x Carteiras de Couro Marrom' },
          { key: '1x Bicicletas Vikings Rosa' },
        ]}
        renderItem={({ item }) => <Description>{item.key}</Description>}
      />
    </Container>
  );
}
