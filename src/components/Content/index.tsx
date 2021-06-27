import React from 'react';

import { Container, Title, Caption, Description, Text, Ending, View,} from './styles';

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
        {budget && <Text>Verba: {budget}</Text> }
        {starting && <Text>Início: {starting}</Text> }
       <View>
       {ending && <Text>Prazo:</Text> }
       {ending && <Ending> {ending}</Ending> }
       </View>
      <Description>{description}</Description>
    </Container>
  );
}
