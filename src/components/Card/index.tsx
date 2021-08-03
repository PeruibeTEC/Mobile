import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { Container, Photo, Name, Budget, ContentContainer } from './styles';

export function Card(): ReactElement {
  return (
    <Container>
      <View style={{ width: '30%' }}>
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
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity>
          <Feather name="arrow-right" color="#000000" size={28} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
