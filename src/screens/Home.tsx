import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../components/Header/Header';

import fonts from '../styles/fonts';

export function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <Header title="Home" />
    </SafeAreaView>
  );
}
