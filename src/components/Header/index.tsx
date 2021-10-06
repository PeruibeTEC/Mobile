import React from 'react';
import { TouchableOpacity } from 'react-native';

import pixelToDP from '../../utils/pixelToDP';

import { Container, MenuIcon } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo height={pixelToDP.height(40)} width={pixelToDP.width(35)} />

      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <MenuIcon name="menu" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
