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
            image="https://roteirosecotrilhas.com.br/wp-content/uploads/2019/10/praia-do-guarau.jpg"
          />

          <Post
            caption="Paróquia São José Operário no Caraguava, que lindo!!!"
            profile_image="https://avatars.githubusercontent.com/u/50719694?v=4"
            name="João Victor"
            comment="08"
            likes="77"
            hours="07h"
            image="https://paulinhodatv.com.br/site/wp-content/uploads/2017/08/ig10.jpg"
          />

          <Post
            caption='"Nada como procurar quando se quer achar alguma coisa. Quando se procura geralmente se encontra alguma coisa, sem dúvida, mas nem sempre o que estávamos procurando." - J.R.R Tokien'
            profile_image="https://avatars.githubusercontent.com/u/47303115?s=70&v=4"
            name="Diogo Braz"
            comment="14"
            likes="21"
            hours="41min"
          />

          <Post
            caption="Genteee, que incrível conhecer este lugar! Ruínas do Abarebebe, ameii!"
            profile_image="https://avatars.githubusercontent.com/u/61697988?v=4"
            name="Letícia Silverio"
            comment="56"
            likes="102"
            hours="12min"
            image="https://www.cidadeecultura.com/wp-content/uploads/2016/08/Peruibe-Turismo-Religioso-Ruina-Abarebebe-IMG_0741-bx.jpg"
          />

          <Post
            caption="Quem ai conhece essa pousada aee... Pousada Morada do Sol, é sucesso hahah S2"
            profile_image="https://avatars.githubusercontent.com/u/61697833?s=70&v=4"
            name="Pedro Bertoluzzi"
            comment="02"
            likes="83"
            hours="8h"
            image="https://media-cdn.tripadvisor.com/media/photo-s/03/80/f7/d5/pousada-morada-do-sol.jpg"
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
