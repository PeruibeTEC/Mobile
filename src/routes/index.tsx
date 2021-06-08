import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import StackRoutes from './stack.routes';
import AuthRoutes from './tab.routes';

const Routes = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
)

export default Routes;
