import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { FinishSignUp } from '../screens/FinishSignUp';

import AuthRoutes from './tab.routes';
import colors from '../styles/colors';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackRoutes.Screen 
      name="SignIn" 
      component={SignIn}
    />
    <StackRoutes.Screen 
      name="SignUp" 
      component={SignUp} 
    />
    <StackRoutes.Screen 
      name="FinishSignUp" 
      component={FinishSignUp} 
    />
    <StackRoutes.Screen 
      name="Home" 
      component={AuthRoutes} 
    />
  </StackRoutes.Navigator>
);

export default AppRoutes;
