import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import SideBar from '../components/SideBar';

import normalize from '../utils/normalizeSize';
import colors from '../styles/colors';
import { sizes } from '../utils/predefinedSizes';
import fonts from '../styles/fonts';

import Profile from '../screens/Profile';
import HomeTabs from './tab.routes';
import TouristSpot from '../screens/TouristSpot';

const Drawer = createDrawerNavigator();

const MyDrawer: React.FC = () => {
  return (
    <NavigationContainer independent>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => <SideBar {...props} />}
        drawerStyle={{ width: '84%' }}
        drawerContentOptions={{
          activeBackgroundColor: '#ECF6F6',
          activeTintColor: colors.light.primary700,
          inactiveTintColor: colors.light.gray400,
          itemStyle: {
            borderRadius: normalize(8),
            padding: sizes.height.dp4,
          },

          labelStyle: {
            fontFamily: fonts.robotoMedium,
            fontSize: normalize(16),
          },
        }}
      >
        <Drawer.Screen
          name="Início"
          component={HomeTabs}
          options={{
            drawerLabel: 'Início',
            drawerIcon: ({ color }) => (
              <Icon name="home-outline" size={normalize(24)} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: 'Perfil',
            drawerIcon: ({ color }) => (
              <Icon name="account-outline" size={normalize(24)} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="TouristSpot"
          component={TouristSpot}
          options={{
            drawerLabel: 'Pontos Turísticos',
            drawerIcon: ({ color }) => (
              <Icon
                name="map-marker-outline"
                size={normalize(24)}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;
