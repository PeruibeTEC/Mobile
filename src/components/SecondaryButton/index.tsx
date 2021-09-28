import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Container, Text } from './styles';

interface IProps extends RectButtonProps, View {
  title: string;
  children?: React.ReactNode;
}

const SecondaryButton: React.FC<IProps> = ({
  title,
  children,
  style,
  ...props
}) => {
  return (
    <Container style={style}>
      <Button {...props}>
        {children}
        <Text>{title}</Text>
      </Button>
    </Container>
  );
};

export default SecondaryButton;
