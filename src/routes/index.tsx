import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../pages/Onboarding';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Onboarding" component={Onboarding} />
  </Stack.Navigator>
);

export default Routes;