import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Text } from './styles';

interface IProps extends RectButtonProps {
  title: string;
  children?: React.ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
}

const Button: React.FC<IProps> = ({
  title,
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <Container {...props}>
      {leftIcon && children}
      <Text>{title}</Text>
      {rightIcon && children}
    </Container>
  );
};

export default Button;
