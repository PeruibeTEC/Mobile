import React from 'react';

import pixelToDP from '../../utils/pixelToDP';

import { Container, MenuIcon } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo height={pixelToDP.height(40)} width={pixelToDP.width(35)} />
      <MenuIcon name="menu" />
    </Container>
  );
};

export default Header;
