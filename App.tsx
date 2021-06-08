import React from 'react';
import { 
  useFonts,
  Inter_600SemiBold,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}
