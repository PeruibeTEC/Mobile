import 'react-native-gesture-handler';

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

import colors from './src/styles/colors';

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
      <StatusBar
        // eslint-disable-next-line react/style-prop-object
        style="auto"
        backgroundColor={colors.light.background}
        translucent
      />
      <Routes />
    </>
  );
};

export default App;
