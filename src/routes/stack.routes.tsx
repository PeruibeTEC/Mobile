import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from '../screens/accessFlow/Initial';

import ChooseAnOptionSignIn from '../screens/accessFlow/SignIn/ChooseAnOption';
import SignIn from '../screens/accessFlow/SignIn/WithEmail';

import ChooseYourProfile from '../screens/accessFlow/SignUp/ChooseYourProfile';
import ChooseAnOptionSignUp from '../screens/accessFlow/SignUp/ChooseAnOption';
import SignUp from '../screens/accessFlow/SignUp/WithEmail';
import AdditionalDataTourist from '../screens/accessFlow/SignUp/touristScreens/AdditionalData';
import AdditionalDataBusiness from '../screens/accessFlow/SignUp/businessScreens/AdditionalData';
import LocationOnMap from '../screens/accessFlow/SignUp/businessScreens/LocationOnMap';
import Contact from '../screens/accessFlow/SignUp/businessScreens/Contact';
import FinishRegistration from '../screens/accessFlow/SignUp/FinishRegistration';

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

    <StackRoutes.Screen
      name="ChooseAnOptionSignIn"
      component={ChooseAnOptionSignIn}
    />
    <StackRoutes.Screen name="SignIn" component={SignIn} />

    <StackRoutes.Screen
      name="ChooseYourProfile"
      component={ChooseYourProfile}
    />
    <StackRoutes.Screen
      name="ChooseAnOptionSignUp"
      component={ChooseAnOptionSignUp}
    />
    <StackRoutes.Screen name="SignUp" component={SignUp} />
    <StackRoutes.Screen
      name="AdditionalDataTourist"
      component={AdditionalDataTourist}
    />
    <StackRoutes.Screen
      name="AdditionalDataBusiness"
      component={AdditionalDataBusiness}
    />
    <StackRoutes.Screen name="Contact" component={Contact} />
    <StackRoutes.Screen name="LocationOnMap" component={LocationOnMap} />
    <StackRoutes.Screen
      name="FinishRegistration"
      component={FinishRegistration}
    />

    <StackRoutes.Screen name="Home" component={AuthRoutes} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
