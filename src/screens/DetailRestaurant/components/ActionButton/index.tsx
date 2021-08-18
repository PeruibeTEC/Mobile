import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { ContainerBox, Text } from './styles';

interface IProps extends TouchableOpacityProps {
  backgroundColor: string;
  borderColor: string;
  iconName: string | any;
  text: string;
}

export function ActionButton({
  backgroundColor,
  borderColor,
  iconName,
  text,
  ...rest
}: IProps): ReactElement {
  return (
    <SafeAreaView style={{ paddingHorizontal: 12 }}>
      <TouchableOpacity activeOpacity={0.6} {...rest}>
        <ContainerBox borderColor={borderColor} bgc={backgroundColor}>
          <FontAwesome name={iconName} size={30} color="#fff" />
          <Text>{text}</Text>
        </ContainerBox>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
