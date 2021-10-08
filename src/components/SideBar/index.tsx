import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

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

        <Name>Arwen Undómiel</Name>

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
