import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import loadAnimation from './load.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  animation: {
    backgroundColor: 'transparent',
  },
});

export function Load(): ReactElement {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}
