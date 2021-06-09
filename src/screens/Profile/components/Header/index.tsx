import React from 'react';

import { Container, Background, ProfileImage } from './styles';

interface HeaderProps {
  profile_image: string;
  background_photo: string;
}

const Header: React.FC<HeaderProps> = ({ background_photo, profile_image }) => {
  return (
    <Container>
      <Background source={{ uri: background_photo }}>
        <ProfileImage source={{ uri: profile_image }} />
      </Background>
    </Container>
  );
};

export default Header;
