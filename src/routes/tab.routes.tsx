import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import Restaurants from '../screens/Restaurants';
import Home from '../screens/Home';

import { ProjectList } from '../screens/ProjectList';
import { Project } from '../screens/Project';
import DetailRestaurant from '../screens/DetailRestaurant';

import pixelToDP from '../utils/pixelToDP';
import colors from '../styles/colors';
import normalize from '../utils/normalizeSize';

const Tab = createMaterialBottomTabNavigator();
const StackRoutes = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.light.primary700}
      inactiveColor={colors.light.gray400}
      barStyle={{
        height: pixelToDP.height(56),
        backgroundColor: colors.light.background,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.light.gray100,
        borderTopWidth: pixelToDP.height(1),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={normalize(24)} />
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={Restaurants}
        options={{
          tabBarLabel: 'Restaurantes',
          tabBarIcon: ({ color }) => (
            <Icon
              name="silverware-fork-knife"
              color={color}
              size={normalize(24)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Construction"
        component={ProjectList}
        options={{
          tabBarLabel: 'Obras',
          tabBarIcon: ({ color }) => (
            <Icon name="hammer-wrench" color={color} size={normalize(24)} />
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
            backgroundColor: colors.light.background,
          },
        }}
      >
        <StackRoutes.Screen name="HomeTabs" component={HomeTabs} />
        <StackRoutes.Screen name="Project" component={Project} />
        <StackRoutes.Screen
          name="DetailRestaurant"
          component={DetailRestaurant}
        />
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
