import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TitleImage } from '../../components/TitleImage';

export function TheftItems() {
  return (
    <ScrollView>
      <Header title="Detalhes do Incidente" />
      <TitleImage
        title="Assalto a Mão Armada"
        image="https://static.lared.cl/wp-content/uploads/2019/09/05102425/20160927185301_740x3705509366827156214087-700x366.jpg"
       />
    </ScrollView>
  );
}
