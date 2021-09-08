import React, { useCallback, useRef, useState } from 'react';
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
  const [isFilled, setIsFilled] = useState(false);

  const inputValueRef = useRef<{ value: string }>({ value: '' });

  const handleInputOnBlur = useCallback(() => {
    console.log('teste');
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <InputText
        returnKeyType="next"
        autoCorrect={false}
        onblur={() => console.log('teste')}
        {...props}
      />
    </Container>
  );
};

export default Input;
