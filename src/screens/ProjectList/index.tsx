import React, { ReactElement } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card';

export function ProjectList(): ReactElement {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title="Obras da Cidade" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
}
