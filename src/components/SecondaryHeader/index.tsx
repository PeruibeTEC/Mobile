import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { Container, MenuIcon, Title } from './styles';

const SecondaryHeader: React.FC = () => {
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

      <Title>Perfil</Title>
    </Container>
  );
};

export default SecondaryHeader;
