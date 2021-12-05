import React, { useEffect, useState } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  City,
  Container,
  Content,
  Cover,
  Details,
  Dot,
  // LogoutContainer,
  Name,
  Options,
  ProfileImage,
  TypeUser,
} from './styles';

const SideBar: React.FC<DrawerContentComponentProps> = props => {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const usernames = await AsyncStorage.getItem('@PeruibeTec:name');
      setUsername(usernames || 'default');
    }

    loadStoragedData();
  }, []);

  return (
    <Container>
      <Cover
        source={{
          uri: 'https://abglt.org.br/wp-content/uploads/2020/10/wallpaper-pc1-scaled-1.jpg',
        }}
        imageStyle={{ opacity: 0.4 }}
      >
        <ProfileImage
          source={{
            uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
        />

        <Name>{username}</Name>

        <Details>
          <TypeUser>Turista</TypeUser>
          <Dot />
          <City>Rio de Janeiro</City>
        </Details>
      </Cover>

      <Options>
        <Content {...props} />
      </Options>

      {/* <LogoutContainer /> */}
    </Container>
  );
};

export default SideBar;
