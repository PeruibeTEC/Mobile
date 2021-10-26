import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Container } from './styles';

import Logo from '../../../../assets/logo.svg';
import pixelToDP from '../../../../utils/pixelToDP';

interface IProps {
  goBack?: boolean;
}

const Header: React.FC<IProps> = ({ goBack = true }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Icon
        name="arrow-left"
        size={28}
        color="#0D9BA3"
        style={!goBack && { opacity: 0 }}
        onPress={() => navigation.goBack()}
      />
      <Logo width={pixelToDP.width(56)} height={pixelToDP.height(64)} />
      <Icon
        name="arrow-right"
        size={28}
        color="#0D9BA3"
        style={{ opacity: 0 }}
      />
    </Container>
  );
};

export default Header;
