import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Profile from '../screens/Profile';
import { HomeTabs } from './tab.routes';

const Drawer = createDrawerNavigator();

const MyDrawer: React.FC = () => {
  return (
    <NavigationContainer independent>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Início" component={HomeTabs} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;
