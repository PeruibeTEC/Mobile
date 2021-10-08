import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Header from '../../components/Header';
import Post from '../../components/Post';

import normalize from '../../utils/normalizeSize';
import colors from '../../styles/colors';

import { Container, Fab, Feed } from './styles';

const styles = StyleSheet.create({
  fab: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />

        <Feed showsVerticalScrollIndicator={false}>
          <Post
            caption="“Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.” ️"
            profile_image="https://avatars.githubusercontent.com/u/51277667?v=4"
            name="Henrique Martins"
            comment="12"
            likes="29"
            hours="2h"
            image="https://cdn4.ecycle.com.br/cache/images/2021-04/50-650-o-que-e-paisagem.jpg"
          />
          <Post
            caption="“Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.” ️"
            profile_image="https://avatars.githubusercontent.com/u/51277667?v=4"
            name="Henrique Martins"
            comment="12"
            likes="29"
            hours="2h"
            image="https://cdn4.ecycle.com.br/cache/images/2021-04/50-650-o-que-e-paisagem.jpg"
          />
        </Feed>
      </Container>
      <Fab activeOpacity={0.8} style={styles.fab}>
        <Icon name="plus" size={normalize(28)} color={colors.light.primary50} />
      </Fab>
    </>
  );
};

export default Home;
