import React from 'react';

import { Container, Image, Triangle } from './styles';

const Pin: React.FC = () => {
  return (
    <Container>
      <Image
        source={{
          uri: 'https://revistanove.com.br/wp-content/uploads/2018/10/ruinas-do-abarebebe-revista-nove-foto-christian-jauch2.jpg',
        }}
      />

      <Triangle />
    </Container>
  );
};

export default Pin;
