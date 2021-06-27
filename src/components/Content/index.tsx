import React from 'react';

import { Container, Title, Caption, Description,Budget,Starting,Ending } from './styles';

interface ContentProps {
  title: string;
  street: string;
  number?: string;
  description?: string;
  budget?: string;
  starting?:string;
  ending?:string;
}

export function Content({ title, street,budget, number, description, starting, ending}: ContentProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Caption>
        {street} {number}
      </Caption>
      {budget && <Budget>Verba: {budget}</Budget> }
      {starting && <Starting>Início: {starting}</Starting> }
      {ending && <Ending>Prazo: {ending}</Ending> }
      <Description>{description}</Description>
    </Container>
  );
}
