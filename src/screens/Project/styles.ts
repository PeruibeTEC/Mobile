import styled from 'styled-components/native';

export const Border = styled.View`
  border-color: #ebeff3;
  border-bottom-width: 7px;
`;

export const TitleToComments = styled.Text`
  font-size: 16px;
  font-family: 'Inter_600SemiBold';
  color: #000000;
  padding-left: 28px;
  margin-top: 12px;
  padding-bottom: 12px;
  border-color: #e0e5eb;
  border-bottom-width: 1px;
`;

export const InputContainer = styled.View`
  justify-content: center;
  flex-direction: column;
  border-color: #e0e5eb;
  border-bottom-width: 1px;
  width: 100%;
  margin-bottom: 12px;
`;

export const InputText = styled.Text`
  font-size: 14px;
  font-family: 'Inter_600SemiBold';
  color: #000000;
  padding-left: 28px;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  margin-top: 28px;
  height: 40px;
  
  background-color: #F6F6F6;
  width: 75%;
  border-color: #E8E8E8;
  border-width: 1.3px;
  border-radius: 15px;
`;