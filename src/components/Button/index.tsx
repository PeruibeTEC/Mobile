import React from 'react';

import { Container, Text } from './styles';

interface ButtonProps {
  title: string;
  children?: React.ReactNode;
}

export function Button({ title, children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
      {children}
    </Container>
  );
}
