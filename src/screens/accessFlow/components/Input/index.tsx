import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText, Label } from './styles';

interface IProps extends TextInputProps {
  label: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, IProps> = (
  { label, ...props },
  ref,
) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText returnKeyType="next" autoCorrect={false} {...props} />
    </Container>
  );
};

export default Input;
