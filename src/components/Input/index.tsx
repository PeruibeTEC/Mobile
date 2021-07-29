import React, { forwardRef, useCallback, useRef, useState } from 'react';

import { TextInputProps } from 'react-native';

import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  defaultValue: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

export const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, defaultValue, ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={isFocused || isFilled ? '#2196F3' : '#BDBDBD'}
        />
      )}

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#BDBDBD"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
