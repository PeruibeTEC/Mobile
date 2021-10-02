import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Rb, ButtonText, Container } from './styles';

interface IProps extends RectButtonProps {
  text: string;
  background?: string;
}

const Button: React.FC<IProps> = ({ text, background, ...props }) => {
  return (
    <Container>
      <Rb {...props}>
        <ButtonText bg={background}>{text}</ButtonText>
      </Rb>
    </Container>
  );
};

export default Button;
