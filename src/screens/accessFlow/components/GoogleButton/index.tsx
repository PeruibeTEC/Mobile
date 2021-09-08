import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import { Button, ButtonText, Container } from './styles';

import GoogleIcon from '../../../../assets/iconGoogleLogo.svg';

interface IProps extends RectButtonProps {
  text: string;
}

const GoogleButton: React.FC<IProps> = ({ text, ...props }) => {
  return (
    <Container>
      <Button {...props}>
        <GoogleIcon width={24} height={24} />
        <ButtonText>{text}</ButtonText>
      </Button>
    </Container>
  );
};

export default GoogleButton;
