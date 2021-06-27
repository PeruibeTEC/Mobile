import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import Profile from '../screens/Profile';
import { Restaurants } from '../screens/Restaurants';
import { Points } from '../screens/Points';
import { TheftItems } from '../screens/TheftItems';
import { Project } from '../screens/Project';

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
          name="Incidents"
          component={TheftItems}
          options={{
            tabBarLabel: 'Incidentes',
            tabBarIcon: ({ color }) => (
              <Feather name="alert-triangle" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Business"
          component={Restaurants}
          options={{
            tabBarLabel: 'Comercios',
            tabBarIcon: ({ color }) => (
              <Feather name="coffee" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Points"
          component={Points}
          options={{
            tabBarLabel: 'Pontos',
            tabBarIcon: ({ color }) => (
              <Feather name="map-pin" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="Construction"
          component={Project}
          options={{
            tabBarLabel: 'Obras',
            tabBarIcon: ({ color }) => (
              <Feather name="map" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
