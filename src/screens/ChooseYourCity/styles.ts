import styled from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Title = styled.Text`
  margin-bottom: 14px;
  color: black;

  font-family: 'Inter_600SemiBold';
  font-weight: 600;
  font-size: 32px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: #9c9c9c;

  font-family: 'Inter_500Medium';
  font-size: 16px;
  text-align: center;
`;

export const Caption = styled.Text`
  color: #9c9c9c;

  font-family: 'Inter_500Medium';
  font-size: 14px;
  text-align: left;
`;

export const ContainerPicker = styled.View`
  margin-bottom: 24px;
  width: 85%;
`;

export const PickerStyle = styled.View`
  border: 2px #F6F6F6;
  border-radius: 8px;
  background-color: #E8E8E8;
`;