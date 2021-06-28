import styled from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
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

export const Terms = styled.Text`
  color: #666666;

  font-family: 'Inter_400Regular';
  font-size: 14px;
`;
