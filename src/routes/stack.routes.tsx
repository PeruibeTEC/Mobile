import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from '../screens/accessFlow/Initial';
import SignIn from '../screens/accessFlow/SignIn';
import { SignUp } from '../screens/accessFlow/SignUp';
import { ChooseYourType } from '../screens/ChooseYourType';
import ChooseYourProfile from '../screens/accessFlow/ChooseYourProfile';
import { FinishSignUp } from '../screens/FinishSignUp';
import { ChooseYourCity } from '../screens/ChooseYourCity';

import AuthRoutes from './tab.routes';
import colors from '../styles/colors';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.light.background,
      },
    }}
  >
    <StackRoutes.Screen name="initial" component={Initial} />
    <StackRoutes.Screen name="SignIn" component={SignIn} />
    <StackRoutes.Screen
      name="ChooseYourProfile"
      component={ChooseYourProfile}
    />
    <StackRoutes.Screen name="ChooseYourType" component={ChooseYourType} />
    <StackRoutes.Screen name="SignUp" component={SignUp} />
    <StackRoutes.Screen name="ChooseYourCity" component={ChooseYourCity} />
    <StackRoutes.Screen name="FinishSignUp" component={FinishSignUp} />
    <StackRoutes.Screen name="Home" component={AuthRoutes} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
