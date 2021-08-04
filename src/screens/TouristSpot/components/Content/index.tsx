import React, { ReactElement } from 'react';

import { Container, Title, Description } from './styles';

interface ContentProps {
  title: string;
  description: string;
}

export function Content({ title, description }: ContentProps): ReactElement {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
