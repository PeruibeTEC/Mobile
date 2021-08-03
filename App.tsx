import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
