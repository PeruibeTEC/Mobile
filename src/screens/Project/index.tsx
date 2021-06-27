import React from 'react';
import { ScrollView } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TitleImage } from '../../components/TitleImage';
import { Content } from '../../components/Content';
import { Border} from './styles';

export function Project() {

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title="Obras da Cidade" />
      <TitleImage
        title="Hospital de Peruíbe"
        image="https://lh3.googleusercontent.com/proxy/vXe0ZeGYZRGfkelOQvJJzvBBWImpiiyPAmbnO9dgFxvMe-vYBaePfS__6CikWRGFkVu41LrXbemhREMoQ-TbjGMxVHI_vgF4t7UbaouclZA8Br569Mch5tqDKjJas2u_Tlmb5TF2FdKe"
      />
       <Content
        title="Hospital de Peruibe"
        street="R. Ten. José Ignácio Monte Olivia"
        number="10"
        budget="Verba: R$ 22.000.000.000,00"
        description="lorem ipsum dolor sit lorem ipsum d lorem sed lorem ipsum dolor
        lorem ipsum dolor sit lorem ipsum d lorem sed lorem ipsum dolor
        lorem ipsum dolor sit lorem ipsum d lorem sed lorem ipsum dolor
        lorem ipsum dolor sit lorem ipsum d lorem sed lorem ipsum dolor
        lorem ipsum dolor sit lorem ipsum d lorem sed lorem ipsum dolor"
      />
      <Border/>
    </ScrollView>
  );
}

