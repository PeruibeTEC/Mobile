import React from 'react';

import Header from './components/Header';
import SwitchSelector from './components/SwitchSelector';

import Post from '../../components/Post';
import SecondaryHeader from '../../components/SecondaryHeader';

import normalize from '../../utils/normalizeSize';

import { Container, Name, Biography, Content } from './styles';

const Profile: React.FC = () => {
  return (
    <Container style={{ flex: 1 }}>
      <SecondaryHeader title="Perfil" />

      <Content>
        <Header
          background_photo="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          profile_image="https://images.pexels.com/photos/2666467/pexels-photo-2666467.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Name>Arwen Undómiel</Name>
        <Biography>
          “Não devemos nos questionar porque algumas coisas nos acontecem e sim
          o que podemos fazer com o tempo que nos é dado.”
        </Biography>

        <SwitchSelector
          style={{ paddingHorizontal: 50, marginVertical: normalize(32) }}
          options={[
            { label: 'Posts', value: 'posts' },
            { label: 'Fotos', value: 'fotos' },
          ]}
          // TODO: add function to switch filter
          onPress={() => {}}
        />

        <Post
          caption="“Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.”"
          profile_image="https://images.pexels.com/photos/2666467/pexels-photo-2666467.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          name="Arwen Undómiel"
          comment="40"
          likes="321"
          hours="8h"
          image="https://roteirosecotrilhas.com.br/wp-content/uploads/2019/10/praias-de-peruibe.png"
        />

        <Post
          caption="“Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.”"
          profile_image="https://images.pexels.com/photos/2666467/pexels-photo-2666467.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          name="Arwen Undómiel"
          comment="40"
          likes="321"
          hours="8h"
          image="https://roteirosecotrilhas.com.br/wp-content/uploads/2019/10/praias-de-peruibe.png"
        />
      </Content>
    </Container>
  );
};

export default Profile;
