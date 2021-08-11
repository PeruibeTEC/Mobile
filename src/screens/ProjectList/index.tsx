import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';

import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card';
import { FilterInput } from '../../components/FilterInput';

export function ProjectList(): ReactElement {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title="Obras da Cidade" />
      <FilterInput />
      <Card
        name="Hospital de Peruíbe"
        image="https://lh3.googleusercontent.com/proxy/vXe0ZeGYZRGfkelOQvJJzvBBWImpiiyPAmbnO9dgFxvMe-vYBaePfS__6CikWRGFkVu41LrXbemhREMoQ-TbjGMxVHI_vgF4t7UbaouclZA8Br569Mch5tqDKjJas2u_Tlmb5TF2FdKe"
        budget="22.000.000,00"
      />
      <Card
        name="Maternidade de Peruíbe"
        image="https://cdn.diariodolitoral.com.br/upload/dn_noticia/2019/09/hospital-peruibe1-80603_2.jpg"
        budget="1.000.000,00"
      />
      <Card
        name="Unidade de Saúde (USafa)"
        image="https://www.maisperuibe.com.br/wp-content/uploads/2021/07/usafa12-1000x600.jpeg"
        budget="22.400.000,00"
      />
      <Card
        name="Reforma das Estradas"
        image="https://s2.glbimg.com/8uAIdn73wjQyiWVza-kW7qmQ5QY=/0x0:1152x648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/5/I/k2P3WkTBWeoBSzXaNHXQ/cratera22.jpg"
        budget="5.000,00"
      />
      <Card
        name="Reforma da Praça Flórida"
        image="https://setee.com.br/wp-content/uploads/2019/05/peruibe1.jpg"
        budget="30.000.000,00"
      />
      <Card
        name="Escola Estadual Luiz Abel"
        image="https://cdn.diariodolitoral.com.br/upload/dn_noticia/2019/06/escola-reproducao-maps.jpg"
        budget="50.000,00"
      />
    </ScrollView>
  );
}
