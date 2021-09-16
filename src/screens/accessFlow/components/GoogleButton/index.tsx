import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Button, ButtonText, Container } from './styles';

import GoogleIcon from '../../../../assets/iconGoogleLogo.svg';

interface IProps extends RectButtonProps {
  text: string;
  background?: string;
}

const GoogleButton: React.FC<IProps> = ({ text, background, ...props }) => {
  return (
    <Container>
      <Button {...props}>
        <GoogleIcon width={24} height={24} />
        <ButtonText bg={background}>{text}</ButtonText>
      </Button>
    </Container>
  );
};

export default GoogleButton;
