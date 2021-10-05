import React, { ReactElement } from 'react';

import Header from '../../components/Header';
import { Post } from '../../components/Post/Post';

import { Container, Feed } from './styles';

export function Home(): ReactElement {
  return (
    <Container>
      <Header />

      <Feed showsVerticalScrollIndicator={false}>
        <Post
          caption="“Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.” ️"
          profile_image="https://avatars.githubusercontent.com/u/51277667?v=4"
          name="Henrique Martins"
          comment="12"
          likes="29"
          hours="2"
          image="https://cdn4.ecycle.com.br/cache/images/2021-04/50-650-o-que-e-paisagem.jpg"
        />
        <Post
          caption="“Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.” ️"
          profile_image="https://avatars.githubusercontent.com/u/51277667?v=4"
          name="Henrique Martins"
          comment="12"
          likes="29"
          hours="2"
          image="https://cdn4.ecycle.com.br/cache/images/2021-04/50-650-o-que-e-paisagem.jpg"
        />
      </Feed>
    </Container>
  );
}
