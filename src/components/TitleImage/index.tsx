import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Container, Title, Image } from './styles';

interface TitleImageProps {
  title: string;
  image: string;
}

export function TitleImage({ title, image }: TitleImageProps): ReactElement {
  return (
    <Container>
      <Title>{title}</Title>
      <View>
        <Image source={{ uri: `${image}` }} />
      </View>
    </Container>
  );
}
