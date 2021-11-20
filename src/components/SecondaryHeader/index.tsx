import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { Container, MenuIcon, Title } from './styles';

interface IProps {
  title: string;
}

const SecondaryHeader: React.FC<IProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <MenuIcon name="chevron-left" />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Container>
  );
};

export default SecondaryHeader;
