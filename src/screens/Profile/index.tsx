import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import SwitchSelector from './components/SwitchSelector';

import { Container, Name, Biography } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <StatusBar
        style="auto"
        backgroundColor="transparent"
        translucent
        animated
      />

      <SafeAreaView style={{ flex: 1 }}>
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
          style={{ paddingHorizontal: 50, marginTop: 24 }}
          options={[
            { label: 'Posts', value: 'posts' },
            { label: 'Fotos', value: 'fotos' },
          ]}
          onPress={() => {}}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Profile;
