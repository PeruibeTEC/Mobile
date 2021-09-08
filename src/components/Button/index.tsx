import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Text } from './styles';

interface IProps extends RectButtonProps {
  title: string;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({ title, children, ...props }) => {
  return (
    <Container {...props}>
      <Text>{title}</Text>
      {children}
    </Container>
  );
};

export default Button;
