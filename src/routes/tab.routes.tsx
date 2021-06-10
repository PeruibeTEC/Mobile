import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import Profile from '../screens/Profile';
import { Restaurants } from '../screens/Restaurants';
import { Points } from '../screens/Points';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#2196F3"
        inactiveColor="#AAB2AD"
        barStyle={{
          height: '8%',
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#CCD2DB',
          borderTopWidth: 0.5,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <Feather name="user" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurants"
          component={Restaurants}
          options={{
            tabBarLabel: 'Restaurantes',
            tabBarIcon: ({ color }) => (
              <Feather name="coffee" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Points"
          component={Points}
          options={{
            tabBarLabel: 'Points',
            tabBarIcon: ({ color }) => (
              <Feather name="map-pin" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
