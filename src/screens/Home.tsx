import React from 'react';
import { ScrollView } from 'react-native';
import { Header } from '../components/Header/Header';
import { Post } from '../components/Post/Post';

export function Home() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title="Home" />
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
        caption="“Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Viver ultrapassa qualquer entendimento.”"
        profile_image="https://i.pinimg.com/736x/e7/a0/18/e7a01869a1581393e8178c7d8ef0407c.jpg"
        name="Leticia Silveiro"
        comment="40"
        likes="321"
        hours="8"
        image="https://roteirosecotrilhas.com.br/wp-content/uploads/2019/10/praias-de-peruibe.png"
      />
      <Post
        caption="“Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.” ️"
        profile_image="https://avatars.githubusercontent.com/u/51277667?v=4"
        name="Henrique Martins"
        comment="12"
        likes="12"
        hours="12"
      />
    </ScrollView>
  );
}
