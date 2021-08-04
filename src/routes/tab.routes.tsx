import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import { Restaurants } from '../screens/Restaurants';
import { Home } from '../screens/Home';

import { TheftItems } from '../screens/TheftItems';

import { DangerPoints } from '../screens/DangerPoints';
import { Project } from '../screens/Project';

const Tab = createMaterialBottomTabNavigator();
const StackRoutes = createStackNavigator();

function HomeTabs() {
  return (
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
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={Restaurants}
        options={{
          tabBarLabel: 'Comércios',
          tabBarIcon: ({ color }) => (
            <Feather name="coffee" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Points"
        component={DangerPoints}
        options={{
          tabBarLabel: 'Pontos',
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Construction"
        component={Project}
        options={{
          tabBarLabel: 'Obras',
          tabBarIcon: ({ color }) => (
            <Feather name="map" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer independent>
      <StackRoutes.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#ffff',
          },
        }}
      >
        <StackRoutes.Screen name="HomeTabs" component={HomeTabs} />
        <StackRoutes.Screen name="Incidents" component={TheftItems} />
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
