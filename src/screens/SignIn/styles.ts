import styled from 'styled-components/native';
import Input from '../../components/Input';

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 94%;
`;


export const Title = styled.Text`
  margin-bottom: 72px;
  color: black;

  font-family: 'Inter_600SemiBold';
  font-weight: 600;
  font-size: 32px;
`;

export const ContainerInputs = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

export const ForgotPassword = styled.Text`
  margin-top: 24px;
  color: #404B5A;

  font-family: 'Inter_600SemiBold';
  font-size: 16px;
`;

export const CreateAccountContainer = styled.View`
  height: 5%;
  justify-content: center;
  align-items: center;

  border-top-width: 1px;
  border-color: #8B9FBA;
`;

export const CreateAccount = styled.Text`
  font-size: 18px;
  font-family: 'Inter_600SemiBold';
  color: #2196F3;
`;
