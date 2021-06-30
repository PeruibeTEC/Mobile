import styled from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Title = styled.Text`
  margin-bottom: 24px;
  color: black;

  font-family: 'Inter_600SemiBold';
  font-weight: 600;
  font-size: 32px;
  text-align: center;
`;

export const ContainerPicker = styled.View`
  margin-top: 8px;
  margin-bottom: 24px;
  width: 85%;

  border: 2px #F6F6F6;
  border-radius: 8px;
  background-color: #E8E8E8;
`;
