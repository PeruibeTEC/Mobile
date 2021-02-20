import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#424242" />
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
