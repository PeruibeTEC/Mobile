import React from 'react';

import { Container, Title, Caption, Description } from './styles';

interface ContentProps {
  title: string;
  street?: string;
  number?: string;
  description?: string;
}

export function Content({ title, street, number, description }: ContentProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Caption>
        {street} {number}
      </Caption>
      <Description>{description}</Description>
    </Container>
  );
}
