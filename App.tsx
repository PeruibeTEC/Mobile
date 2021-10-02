import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import Routes from './src/routes';
import { Load } from './src/components/Load';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Load />;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
};

export default App;
