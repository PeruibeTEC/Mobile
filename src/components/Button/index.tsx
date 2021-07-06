import React from 'react';
import { ButtonProps } from 'react-native';

import { Container, Text } from './styles';

interface Props extends ButtonProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
