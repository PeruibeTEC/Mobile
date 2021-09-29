import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Container, Text } from './styles';

interface IProps extends RectButtonProps {
  title: string;
  children?: React.ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
}

const SecondaryButton: React.FC<IProps> = ({
  title,
  children,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  return (
    <Container style={style}>
      <Button {...props}>
        {leftIcon && children}
        <Text>{title}</Text>
        {rightIcon && children}
      </Button>
    </Container>
  );
};

export default SecondaryButton;
