import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { Container, Photo, Name, Budget, ContentContainer } from './styles';

export function Card(): ReactElement {
  return (
    <Container>
      <View style={{ width: '40%' }}>
        <Photo
          source={{
            uri: 'https://lh3.googleusercontent.com/proxy/vXe0ZeGYZRGfkelOQvJJzvBBWImpiiyPAmbnO9dgFxvMe-vYBaePfS__6CikWRGFkVu41LrXbemhREMoQ-TbjGMxVHI_vgF4t7UbaouclZA8Br569Mch5tqDKjJas2u_Tlmb5TF2FdKe',
          }}
        />
      </View>
      <ContentContainer>
        <Name>Hospital de Peruíbe</Name>
        <Budget>R$ 22.000.000,00</Budget>
      </ContentContainer>
    </Container>
  );
}
