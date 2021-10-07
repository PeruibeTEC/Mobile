import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import pixelToDP from '../../utils/pixelToDP';

import { Container, MenuIcon } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer);
        }}
      >
        <MenuIcon name="menu" />
      </TouchableOpacity>

      <Logo height={pixelToDP.height(40)} width={pixelToDP.width(35)} />

      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <MenuIcon name="bell-outline" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
