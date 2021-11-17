import React from 'react';
import { TextInputProps, View } from 'react-native';

import { Container, InputText, Label } from './styles';

interface IProps extends TextInputProps {
  label: string;
  error?: { show: boolean; message: string };
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, IProps> = (
  { label, error, ...props },
  ref,
) => {
  return (
    <Container>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Label error={error?.show}>{label}</Label>
        <Label error={error?.show}>{error?.message}</Label>
      </View>
      <InputText
        error={error?.show}
        returnKeyType="next"
        autoCorrect={false}
        {...props}
      />
    </Container>
  );
};

export default Input;
