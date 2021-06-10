import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TitleImage } from '../../components/TitleImage';
import { Content } from '../../components/Content';
import { Time, Border } from './styles';

export function TheftItems() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title="Detalhes do Incidente" />
      <TitleImage
        title="Assalto a Mão Armada"
        image="https://static.lared.cl/wp-content/uploads/2019/09/05102425/20160927185301_740x3705509366827156214087-700x366.jpg"
       />
       <Time>2 Horas Atrás</Time>
       <Content
         title="Assalto no Ribamar"
         street="R.Eduardo Linardi"
         number="880"
         description="Eu estava andando com minha filha e com meu pai no bairro
         Ribamar,descendo a rua do postinho, quando dois homens brancos começaram
         a nos seguir,logo depois eles apontaram a arma para gente e levaram tudo
         de nós."
        />
       <Border/>
    </ScrollView>
  );
}
