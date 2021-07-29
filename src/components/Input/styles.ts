import styled, { css } from 'styled-components/native';
import Feather from '@expo/vector-icons/FontAwesome5';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;

  background: #F6F6F6;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: #E8E8E8;

  flex-direction: row;
  align-items: center;
  
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #2196F3;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6d7989;
  font-size: 16px;
  font-family: 'Inter_600SemiBold';
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;