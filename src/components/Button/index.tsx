import React, { ReactElement } from 'react';
import { ButtonProps } from 'react-native';

import { Container, Text } from './styles';

interface Props extends ButtonProps {
  title: string;
  children?: React.ReactNode;
}

export function Button({
  title,
  children,
  ...rest
}: ButtonProps): ReactElement {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
      {children}
    </Container>
  );
}
