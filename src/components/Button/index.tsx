import React from 'react';

import { Container, Text } from './styles';

interface ButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps){
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
