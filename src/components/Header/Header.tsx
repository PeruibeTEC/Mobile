import React from 'react';

import { Container, Text } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps){
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
