import React, { ReactElement } from 'react';

import { Container, Text } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps): ReactElement {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
